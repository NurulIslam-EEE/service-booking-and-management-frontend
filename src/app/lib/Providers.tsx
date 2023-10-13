"use client";
import { Provider } from "react-redux";

import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import StyledComponentsRegistry from "@/lib/AntdRegistry";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <Provider store={store}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </Provider>
    </SessionProvider>
  );
};

export default Providers;
