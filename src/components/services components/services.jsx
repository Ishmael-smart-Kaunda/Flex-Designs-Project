
export default function Services({data}){
                        return(
                                <article className=" size-full text-gray-500">
                                    <h1 className="text-blue-900 font-semibold pb-2">{data.title}</h1>
                                    <p className="text-justify ">
                                    {data.description}
                                    </p>
                            </article>
                        )
}