import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { parseCookies, destroyCookie } from 'nookies';
import { AuthTokenError } from "../error/AuthTokenError";

export function withSSRAuth<P>(fn: GetServerSideProps<P>):GetServerSideProps {
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
        const cookies = parseCookies(ctx);

        if(!cookies['nextauth.token']){
          return {
            redirect: {
              destination: '/',
              permanent: false,
            }
          }
        }

        try {
          return await fn(ctx);
        } catch(err){
          if (err instanceof AuthTokenError){
            destroyCookie(undefined,'nextauth.token')
            destroyCookie(undefined,'nextauth.refreshToken')
        
            return {
                redirect:{
                    destination: '/',
                    permanent: false,
                }
            }
          }
        }
    }
}