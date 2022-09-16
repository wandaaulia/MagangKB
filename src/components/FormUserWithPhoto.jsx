import React, { useState, useRef } from "react";
import imgClose from "../assets/img/closeAccount.png";
import photoUser from "../assets/img/photoUser.png";
import uploadKTPImage from "../assets/img/upload_ktp.png";

const FormUserWithPhoto = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const ref = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    ref.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    setImageUrl(URL.createObjectURL(fileUploaded));
    console.log(ref);
  };

  return (
    <div className="mt-[24px] w-[1060px] ml-[32px] ">
      <p className="text-[20px] font-[600px] leading-[24.2px] text-[#616161]">
        Informasi Pengguna{" "}
      </p>
      <div className="mt-[32.89px] flex flex-col  p-[32px] w-full bg-white">
        <div className="photo">
          <p className="text-[14px] leading-[18px] text-[#616161]">
            {" "}
            Foto Profil{" "}
          </p>
          <div className="w-[92px] h-[92px] mt-[12px]">
            {" "}
            <img src={photoUser} />{" "}
          </div>
        </div>
        <form id="form" className="formUser mt-[24px] flex flex-row gap-[64px]">
          <div className="formRight">
            <div className="flex flex-col gap-[12px]">
              <label className="text-[ #616161] text-[14px] leading-[17px] font-semibold">
                {" "}
                Nama Lengkap{" "}
              </label>
              <input
                placeholder="Nama Lengkap"
                className="text-[14px] leading-[18px]  font-[800px] p-[16px] w-[476px] border border-solid border-gray-200"
              />
            </div>
            <div className="flex flex-col gap-[12px] mt-[16px]">
              <label className="text-[ #616161] text-[14px] leading-[17px] font-semibold">
                {" "}
                Nomor Telpon{" "}
              </label>
              <input
                placeholder=" Nomor Telpon"
                className="text-[14px] leading-[18px]  font-[800px] p-[16px] w-[476px] border border-solid border-gray-200"
              />
            </div>
            <div className="flex flex-col gap-[12px] mt-[16px]">
              <label className="text-[ #616161] text-[14px] leading-[17px] font-semibold">
                {" "}
                Nomor Telpon Darurat{" "}
              </label>
              <input
                placeholder="Nomor Telpon Darurat"
                className="text-[14px] leading-[18px]  font-[800px] p-[16px] w-[476px] border border-solid border-gray-200"
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-[12px]">
              <label className="text-[ #616161] text-[14px] leading-[17px] font-semibold">
                Nomor KTP
              </label>
              <input
                placeholder="Nomor KTP"
                className="text-[14px] leading-[18px]  font-[800px] p-[16px] w-[476px] border border-solid border-gray-200"
              />
            </div>
            <div className="flex flex-col gap-[12px] mt-[16px]">
              <label className="text-[ #616161] text-[14px] leading-[17px] font-semibold">
                Upload Foto Selfie KTP
              </label>
              <input
                id="fileKTP"
                type="file"
                ref={ref}
                style={{ display: "none" }}
                onChange={handleChange}
              />
              {imageUrl ? (
                <div className="flex flex-row">
                  <div className="w-[50%] mr-[20px]">
                    <img src={imageUrl} alt="img" height="100px" />
                  </div>

                  <button
                    onClick={handleClick}
                    className="w-[30%] gap-[10px] h-[80px] flex flex-col justify-center items-center text-[14px] leading-[18px]  font-[800px] p-[16px] w-[476px] border border-solid border-gray-200"
                  >
                    <div>
                      <img src={uploadKTPImage} />{" "}
                    </div>
                    <span className="text-[#BDBDBD]"> Change File </span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleClick}
                  className="gap-[10px] h-[157px] w-[475px] flex flex-col justify-center items-center text-[14px] leading-[18px]  font-[800px] p-[16px] w-[476px] border border-solid border-gray-200"
                >
                  <div>
                    <img src={uploadKTPImage} />{" "}
                  </div>
                  <span className="text-[#BDBDBD]"> Upload File </span>
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormUserWithPhoto;
