import React from "react";
import { useForm } from "react-hook-form";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSendParcel = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h2 className="text-4xl font-semibold">Send a Parcel</h2>
      <form onSubmit={handleSubmit(handleSendParcel)} className="mt-12 p-4">
        {/* parcel type */}
        <div>
          <label className="label text-secondary mr-5">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio radio-secondary"
              defaultChecked
            />
            Document
          </label>
          <label className="label text-black">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              className="radio radio-secondary"
            />
            Non Document
          </label>
        </div>

        {/* parcel info: */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-5">
          <fieldset className="fieldset">
            <label className="label text-secondary">Parcel Name </label>
            <input
              type="text"
              {...register("parcelName")}
              className="input input-primary w-full"
              placeholder="Parcel Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label text-secondary">Parcel Weight (kg) </label>
            <input
              type="number"
              {...register("parcelWeight")}
              className="input input-primary w-full"
              placeholder="Parcel Weight"
            />
          </fieldset>
        </div>

        {/* two column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* sender info */}
          <fieldset className="fieldset my-5">
          <h4 className="text-2xl font-semibold">Sender Details</h4>
            <label className="label text-secondary">Sender Name </label>
            <input
              type="text"
              {...register("senderName")}
              className="input input-primary w-full"
              placeholder="Sender Name"
            />

            {/* sender address */}
            <label className="label mt-4 text-secondary">Sender Address </label>
            <input
              type="text"
              {...register("senderAddress")}
              className="input input-primary w-full"
              placeholder="Sender Address"
            />

            {/* sender phone */}
            <label className="label text-secondary mt-4">Phone Number </label>
            <input
              type="number"
              {...register("senderPhone")}
              className="input input-primary w-full"
              placeholder="Your Valid Phone Number"
            />

            {/* sender district */}
            <label className="label text-secondary mt-4">Your District</label>
            <select
              type="text"
              {...register("senderDistrict")}
              className="select select-primary w-full"
              placeholder="Select Your District"
            >
                <option value="">Dhaka</option>
                <option value="">Chattogram</option>
                <option value="">Rajshahi</option>
                <option value="">Khulna</option>
                <option value="">Barishal</option>
                <option value="">Sylhet</option>
                <option value="">Rangpur</option>
                <option value="">Mymensingh</option>
                </select>

            {/* sender message */}
            <label className="label text-secondary mt-4">
              Pickup Instruction
            </label>
            <textarea
              type="text"
              {...register("senderPhone")}
              className="textarea input-primary w-full"
              placeholder="Pickup Instructions"
            />
          </fieldset>

          {/* reciever info: */}

          <fieldset className="fieldset my-5">
            <h4 className="text-2xl font-semibold">Reciever Details</h4>
            <label className="label text-secondary">Reciever Name </label>
            <input
              type="text"
              {...register("recieverName")}
              className="input input-primary w-full"
              placeholder="Reciever Name"
            />

            {/* reciever address */}
            <label className="label mt-4 text-secondary">Reciever Address </label>
            <input
              type="text"
              {...register("recieverAddress")}
              className="input input-primary w-full"
              placeholder="Reciever Address"
            />

            {/* reciever phone */}
            <label className="label text-secondary mt-4">Reciever Contact No. </label>
            <input
              type="text"
              {...register("recieverPhone")}
              className="input input-primary w-full"
              placeholder="Your Valid Phone Number"
            />

            {/* reciever district */}
            <label className="label text-secondary mt-4">Reciever District</label>
            <select
              type="text"
              {...register("recieverDistrict")}
              className="select select-primary w-full"
              placeholder="Reciever District"
            >
                <option value="">Dhaka</option>
                <option value="">Chattogram</option>
                <option value="">Rajshahi</option>
                <option value="">Khulna</option>
                <option value="">Barishal</option>
                <option value="">Sylhet</option>
                <option value="">Rangpur</option>
                <option value="">Mymensingh</option>
                </select>

            {/* reciever message */}
            <label className="label text-secondary mt-4">
              Delivery Instruction
            </label>
            <textarea
              type="text"
              {...register("deliveryInstruction")}
              className="textarea input-primary w-full"
              placeholder="Delivery Instructions"
            />
          </fieldset>

          <div></div>
        </div>
        <input
          type="submit"
          value="Send Parcel"
          className="btn btn-primary text-black"
        />
      </form>
    </div>
  );
};

export default SendParcel;
