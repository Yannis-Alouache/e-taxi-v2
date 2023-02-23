import { PhoneIcon, MapPinIcon, CalendarDaysIcon } from "@heroicons/react/24/solid"
import { Key, useEffect, useState } from "react"
import { Combobox } from '@headlessui/react'
import axios from "axios"
import "react-datetime/css/react-datetime.css";
import DatePicker from "./datePicker";
import { Moment } from "moment";
import moment from "moment";

function BookingBanner() {

  const [addressDepart, setAddressDepart] = useState<String>("")
  const [addressArrive, setAddressArrive] = useState<String>("")
  const [telephone, setTelephone] = useState<string>("")
  const [dateTime, setDateTime] = useState<string>("")

  const [departQuery, setDepartQuery] = useState<string>("")
  const [arriveQuery, setArriveQuery] = useState<string>("")

  const [departData, setDepartData] = useState<String[]>([])
  const [arriveData, setArriveData] = useState<String[]>([])

  const [addressDepartError, setAddressDepartError] = useState<Boolean>(false)
  const [addressArriveError, setAddressArriveError] = useState<Boolean>(false)
  const [phoneError, setPhoneError] = useState<Boolean>(false)
  const [dateTimeError, setDateTimeError] = useState<Boolean>(false)
  

  async function handleQueryChange(text: string, _for?: string) {
    let query = ""
    
    if (_for == "arrive") {
      setArriveQuery(text)
      setAddressArrive(text)
      query = arriveQuery
    } else {
      setDepartQuery(text)
      setAddressDepart(text)
      query = departQuery
    }

    if (query.length > 3) {
      let res = await getData(_for)
      let autoCompleteArray: string[] = []
  
      res.forEach(function (element: { properties: { label: string } }) {
        autoCompleteArray.push(element.properties.label)
      });

      if (_for == "arrive") {
        setArriveData(autoCompleteArray)
      }
      setDepartData(autoCompleteArray)
    }
  }

  async function getData(_for?: string) {
    let query = departQuery

    if (_for == "arrive")
      query = arriveQuery

    const { data } = await axios.get("https://api-adresse.data.gouv.fr/search/", {params: {q: query, type: "housenumber", autocomplete: 1}})
    return data.features
  }

  function handleDateTimeChange(date: Moment | string) {
    if(moment.isMoment(date)){
      setDateTime(moment(date).format("DD/MM/YYYY HH:mm"))
    }
    else {
      setDateTime(date)
    }
  }

  async function handleSubmit() {    
    //eslint-disable-next-line
    const phoneRegex = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/
    const dateTimeRegex = /^(0[1-9]|1\d|2[0-8]|29(?=\/\d\d\/(?!1[01345789]00|2[1235679]00)\d\d(?:[02468][048]|[13579][26]))|30(?!\/02)|31(?=\/0[13578]|\/1[02]))\/(0[1-9]|1[0-2])\/([12]\d{3}) ([01]\d|2[0-3]):([0-5]\d)$/gm
    
    setPhoneError(false)
    setAddressArriveError(false)
    setAddressDepartError(false)
    setDateTimeError(false)

    if (addressDepart == null || addressDepart == "") {
      setAddressDepartError(true);
      return;
    }
    if (addressArrive == null || addressArrive == "") {
      setAddressArriveError(true);
      return;
    }
    if (!phoneRegex.test(telephone)) {
      setPhoneError(true)
      return
    }
    if (dateTime == null || dateTime == "") {
      setDateTimeError(true);
      return;
    }
    if (!dateTimeRegex.test(dateTime)) {
      setDateTimeError(true);
      return;
    }

    const formData = {
      "addressD": addressDepart,
      "addressA": addressArrive,
      "phone": telephone,
      "date": dateTime
    }

    console.table(formData);

    const { status, data } = await axios.post(
      "/api/reservations",
      formData,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    )
    console.table({status, data})
  }

  let myDTInputProps = {
    placeholder: "Date et Heure",
    className: "focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full rounded-md text-gray-900 border-gray-300 sm:text-sm xl:text-base px-10 py-3"
  }

  let myDTInputErrorProps = {
    placeholder: "Date et Heure",
    className: "block error w-full rounded-md text-gray-900 focus:ring-rose-500 focus:border-2 focus:border-rose-500 border-2 border-rose-500 sm:text-sm xl:text-base px-10 py-3"
  }
  

  return (
    <>
      <div id="bookingBanner" className='xl:h-80 bg-amber-400 -mt-[4.35em] pt-28 md:pt-28 xl:pt-0 flex items-center'>
          <div className='container mx-auto px-5'>

            <div className="grid xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-1 gap-3">
    
              <div className="relative mt-1 rounded-md shadow-sm">
                <Combobox value={addressDepart} name="depart">
                  <MapPinIcon className={addressDepartError
                    ? "text-rose-500 pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3"
                    : "text-gray-400 pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3"}
                  />
                  <Combobox.Input onChange={(event) => handleQueryChange(event.target.value)} placeholder="Départ..." 
                  className={addressDepartError
                    ? "block error w-full rounded-md text-gray-900 focus:ring-rose-500 focus:border-2 focus:border-rose-500 border-2 border-rose-500 sm:text-sm xl:text-base px-10 py-3"
                    : "block w-full rounded-md text-gray-900 border-gray-300 sm:text-sm xl:text-base focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-10 py-3" }
                    />
                  <Combobox.Options className="bg-white z-10 text-gray-900 absolute transform rounded-md inline-block top-[110%] w-[160%]">
                    {departData.map((address) => (
                      <Combobox.Option className="py-2 px-5 cursor-pointer rounded-md hover:bg-slate-50 flex" key={address as Key} value={address} onClick={() => setAddressDepart(address)}>
                        <MapPinIcon className="w-6 mr-3 text-gray-400"/> 
                        {address}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                </Combobox>
              </div>

              <div className="relative mt-1 rounded-md shadow-sm">
              <Combobox value={addressArrive} name="depart">
                  <MapPinIcon className={addressArriveError
                    ? "text-rose-500 pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3"
                    : "text-gray-400 pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3"}
                  />
                  <Combobox.Input onChange={(event) => handleQueryChange(event.target.value, "arrive")} placeholder="Arrivé..."
                  className={addressArriveError
                    ? "block error w-full rounded-md text-gray-900 focus:ring-rose-500 focus:border-2 focus:border-rose-500 border-2 border-rose-500 sm:text-sm xl:text-base px-10 py-3"
                    : "block w-full rounded-md text-gray-900 border-gray-300 sm:text-sm xl:text-base focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-10 py-3" }
                    />
                  <Combobox.Options className="bg-white z-10 text-gray-900 absolute transform rounded-md inline-block top-[110%] w-[160%]">
                    {arriveData.map((address) => (
                      <Combobox.Option className="py-2 px-5 cursor-pointer rounded-md hover:bg-slate-50 flex" key={address as Key} value={address} onClick={() => setAddressArrive(address)}>
                        <MapPinIcon className="w-6 mr-3 text-gray-400"/> 
                        {address}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                </Combobox>
              </div>

              <div className="relative mt-1 rounded-md shadow-sm">
                <PhoneIcon className={phoneError
                ? "text-rose-500 pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3"
                : "text-gray-400 pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3"
                } />
                <input
                  type="text"
                  name="telephone"
                  id="telephone"
                  onChange={(e) => setTelephone(e.target.value)}
                  value={telephone}
                  className={
                    phoneError ? "block error w-full rounded-md text-gray-900 focus:ring-rose-500 focus:border-2 focus:border-rose-500 border-2 border-rose-500 sm:text-sm xl:text-base px-10 py-3"
                    : "block w-full rounded-md text-gray-900 border-gray-300 sm:text-sm xl:text-base focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-10 py-3"}
                  placeholder="Téléphone"
                />
              </div>

              <div className="relative mt-1 rounded-md shadow-sm">
                <CalendarDaysIcon className={dateTimeError 
                ? "z-10 pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3 text-rose-500"
                : "z-10 pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400"}
                />
                <DatePicker inputProps={dateTimeError ? myDTInputErrorProps : myDTInputProps} value={dateTime} onChange={handleDateTimeChange} locale="fr" className="[&>.rdtPicker]:text-gray-900" />
              </div>
            </div>

            <div className="flex justify-center mt-10 mb-10 xl:mb-0">
              <input className="bg-[#9F340A] uppercase font-bold rounded-full cursor-pointer drop-shadow-2xl px-5 py-3" onClick={handleSubmit} type="submit" value="Reservez un Taxi"/>
            </div>

          </div>
      </div>
    </>
  )
}

export default BookingBanner