import { useForm, type SubmitHandler } from "react-hook-form";
import { loginService } from "../services/api.service";

export function Login() {
  interface Login {
    email: string;
    password: string;
  }

  const envio: SubmitHandler<Login> = (data) => {
    loginService(data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>();

  return (
    <>
      <form onSubmit={handleSubmit(envio)}>
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
          placeholder="password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 2, message: "Min length is 2" },
          })}
        />
        <p>{errors.password?.message}</p>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
