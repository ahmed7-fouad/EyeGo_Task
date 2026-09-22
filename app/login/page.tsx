import { LoginForm } from "@/components/auth/LoginForm";
import { ChartNoAxesCombined } from "lucide-react";

import Logo from "@/components/shared/Logo";
const LoginPage=()=>{
    return (
      <section className="flex h-screen flex-col xl:flex-row">
        <section className="bg-primary-bg space-y-3 flex-1 pt-[5rem] px-15 pb-15">
          <section className="flex flex-col justify-between  h-full">
            <section className="w-[75%] space-y-5">
              <Logo />
              <h1 className="text-card mt-7 text-5xl font-bold leading-17">
                See your business clearly.
              </h1>
              <p className="text-secondary text-lg leading-9 mb-7">
                One dashboard for revenue, orders and customer activity —
                updated as it happens.
              </p>
            </section>
            <svg
              viewBox="0 0 500 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full bg-secondary-bg rounded-lg"
            >
              <path
                d="M0 120 L60 90 L120 100 L180 50 L240 70 L300 30 L360 60 L420 40 L500 15"
                stroke="#E2A33B"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <circle cx="300" cy="30" r="6" fill="#E2A33B" />
            </svg>
          </section>
        </section>
        <LoginForm className="flex-1" />
      </section>
    );
}
export default LoginPage;