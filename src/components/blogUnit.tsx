import Link from 'next/link';
import React from 'react'


function BlogUnit(props: any) {
    return (
        <>
            <li className="py-12">
                <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                        <dl>
                            <dt className="sr-only">Published on</dt>
                            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                <time dateTime="2023-08-05T00:00:00.000Z">{props.date}</time>
                            </dd>
                        </dl>
                        <div className="space-y-5 xl:col-span-3">
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                        <Link className="text-gray-700" href={"/blog/" + props.url}>{props.title}</Link>
                                    </h2>
                                </div>
                                <div className="prose max-w-none text-gray-500 truncate">
                                    {props.subText}
                                </div>
                            </div>
                            <div className="text-base font-medium leading-6">
                                <Link className="text-yellow-400 hover:text-yellow-500 dark:hover:text-primary-400" href={"/blog/" + props.url}>En Savoir Plus →</Link>
                            </div>
                        </div>
                    </div>
                </article>
            </li>
        </>
    )
}

export default BlogUnit;
