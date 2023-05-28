import Image from "next/image";

export default function TechItem({ name, image}) {
  return (
      <article className=" flex flex-col items-center">
        <div className="bg-gray-100 rounded-xl p-5 mb-5">
          <Image src={image} alt={name} priority width={80} height={80} />
        </div>
        <p className="font-medium text-gray-500">{name}</p>
      </article>
  )
}
