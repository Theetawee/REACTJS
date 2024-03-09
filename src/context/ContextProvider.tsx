import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";



const ContextProvider = ({children}: {children: React.ReactNode}) => {

const queryClient = new QueryClient();


    return (
      <HelmetProvider>
      <QueryClientProvider client={queryClient}>
          {children}
            </QueryClientProvider>
      </HelmetProvider>
  )
}

export default ContextProvider