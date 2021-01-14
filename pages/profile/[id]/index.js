import React from "react";
import { MdAccessTime } from "react-icons/md";
import { useRouter } from "next/router";

const tests = [
  {
    id: 1,
    title: "Skolastik Kuantitatif Bagian 1",
    desc: "Meliputi barisan bilangan dan operasi bilangan dasar",
    duration: 1800000,
  },
  {
    id: 2,
    title: "Skolastik Kuantitatif Bagian 2",
    desc: "Meliputi perbandingan senilai dan berbalik nilai",
    duration: 1500000,
  },
  {
    id: 3,
    title: "Matematika Bagian 2",
    desc: "menyelesaikan soal logaritma",
    duration: 1800000,
  },
];

const Profile = () => {
  const router = useRouter();
  console.log(router.query.id);

  return (
    <div className="lg:h-screen bg-gray-50">
      <div className="py-3 px-4 flex items-center justify-between ">
        <div className="items-center">Logo</div>
        <div className="flex items-center">
          <button className="px-4 py-2 bg-green-600  text-white font-medium hover:bg-green-500 rounded">
            Log Out
          </button>
        </div>
      </div>

      <div className="px-4 lg:px-20 ">
        <div className="container mx-auto h-full flex flex-col-reverse lg:flex-row py-11">
          <div className="lg:h-full lg:w-1/3 bg-white shadow-md rounded-md p-4 lg:mr-4">
            <p className="mb-4 font-medium text-lg border-b pb-2">
              Daftar History Try Out Kamu
            </p>
            <div className="lg:h-96 overflow-auto">
              <div
                onClick={() => alert("clicked")}
                className="bg-yellow-500 p-3 text-white hover:bg-yellow-400 flex justify-between items-center rounded-md cursor-pointer mb-2"
              >
                <p>Skolastik Kuantitatif Bagian 1</p>
                <p>89</p>
              </div>
              <div
                onClick={() => alert("clicked")}
                className="bg-yellow-500 p-3 text-white hover:bg-yellow-400 flex justify-between items-center rounded-md cursor-pointer mb-2"
              >
                <div>Skolastik Kuantitatif Bagian 2</div>
                <div>89</div>
              </div>
            </div>
          </div>
          <div className="lg:h-full lg:w-2/3 bg-white shadow-md rounded-md p-4 mb-4 lg:mb:0">
            <div className="">
              <p className="text-2xl mb-3">Hai, Adi Nugroho</p>
              <p className="text-base mb-6">
                Gimana, sudah siap menguji kemampuanmu belum? Pilih salah satu
                list di bawah ini untuk memulai try out!
              </p>
            </div>
            <div className="lg:overflow-auto grid grid-cols-2 gap-4 lg:h-80">
              {tests.map((test) => (
                <div
                  key={test.id}
                  className="border border-gray-300 p-3 flex flex-col justify-between  rounded-md"
                >
                  <div className="flex flex-col mb-2">
                    <p className="font-semibold mb-1">{test.title}</p>
                    <p>{test.desc}</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center mb-3 self-end">
                      <MdAccessTime />
                      <p className=" ml-2">{test.duration / 60000} menit</p>
                    </div>
                    <div
                      className="bg-green-600 hover:bg-green-500 text-white text-center py-2 px-4 rounded-md cursor-pointer"
                      onClick={() => alert("clicked")}
                    >
                      Mulai
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
