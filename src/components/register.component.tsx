import { useForm, type SubmitHandler } from "react-hook-form";
import { registerService } from "../services/api.service";

export function Register() {
  interface Registro {
    email: string;
    name: string;
    username: string;
    password: string;
    address: string;
  }

  const envio: SubmitHandler<Registro> = (data) => {
    registerService(data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Registro>();

  return (
    <>
      <form onSubmit={handleSubmit(envio)}>
        <input
          placeholder="name"
          {...register("name", {
            required: "Name is required",
            minLength: { value: 2, message: "Min length is 2" },
          })}
        />
        <p>{errors.name?.message}</p>
        <input
          placeholder="username"
          {...register("username", {
            required: "Username is required",
            minLength: { value: 2, message: "Min length is 2" },
          })}
        />
        <p>{errors.username?.message}</p>
        <input
          placeholder="password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 2, message: "Min length is 2" },
          })}
        />
        <p>{errors.username?.message}</p>

        <input
          type="email"
          placeholder="email"
          {...register("email", {
            required: "Email is required",
            minLength: { value: 2, message: "Min length is 2" },
          })}
        />
        <p>{errors.email?.message}</p>

        <input
          {...register("address", {
            required: "Address is required",
            minLength: { value: 2, message: "Min length is 2" },
          })}
          placeholder="address"
        />
        <p>{errors.address?.message}</p>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
