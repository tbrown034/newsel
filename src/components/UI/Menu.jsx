import Date from "./Date";
export default function Main() {
  return (
    <div className="flex h-screen justify-center items-center flex-col gap-4  text-center">
      <div className=" w-24 h-24">
        <img className=" rounded-lg" src="../../../public/betterlogo.png"></img>
      </div>
      <h1 className=" text-2xl   font-bold font">Newsle</h1>
      <h2 className=" w-1/2 text-xl">
        A Wordle-inspired headline guessing game.
      </h2>
      <button className=" bg-black text-sky-100 rounded-xl text-lg p-2">
        Play
      </button>
      <Date />
    </div>
  );
}
