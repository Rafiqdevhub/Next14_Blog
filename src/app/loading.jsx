import Image from "next/image";
const loading = () => {
  return (
    <div className="flex justify-center mt-16">
      <Image src={"/spinner.svg"} width={50} height={50} alt="loading..." />
    </div>
  );
};

export default loading;