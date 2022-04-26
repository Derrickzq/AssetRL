import Main from "@/components/Pages/Main";
import Banks from "@/components/Pages/Banks";
import Terms from "@/components/Pages/Terms";
import Videos from "@/components/Pages/Videos";
import Etf from "@/components/Pages/Etf";
import Issuers from "@/components/Pages/Issuers";
import Error404 from "@/components/Pages/Error404";
// import Book from "@/components/Pages/Book";
import Cases from "@/components/Pages/Cases";
import Hook from "@/components/Pages/Hook";
import Services from "@/components/Pages/Services";
import Team from "@/components/Pages/Team";
import Rlportfolio from "@/components/Pages/Rlportfolio"
import Mlportfolio from "@/components/Pages/Mlportfolio"
import Technical from "@/components/Pages/Technical"
import Bonds from "@/components/Pages/Bonds"
import Futures from "@/components/Pages/Futures"
import Stocks from "@/components/Pages/Stocks"
import OptionChina from "@/components/Pages/OptionChina"



export default [
    {
        path: "",
        name: "main",
        component: Main,
    },
    {
        path: "/terms",
        name: "terms",
        component: Terms,
    },
    {
        path: "/videos",
        name: "videos",
        component: Videos,
    },
    {
        path: "/etf",
        name: "etf",
        component: Etf,
    },
    {
        path: "/issuers",
        name: "issuers",
        component: Issuers,
    },
    {
        path: "/banks",
        name: 'banks',
        component: Banks,
    },
    {
        path: '/404',
        name: '404',
        component: Error404,
    },
    {
        path: '/book',
        name: 'book',
        component: Hook,
    },
    {
        path: '/cases',
        name: 'cases',
        component: Cases,
    },
    {
        path: '/hook',
        name: 'hook',
        component: Hook,
    },
    {
        path: '/services',
        name: 'services',
        component: Services,
    },
    {
        path: '/team',
        name: 'team',
        component: Team,
    },
    {
        path: '*',
        redirect: '/404'
    },
    {
        path: '/mlportfolio',
        name: 'mlporfolio',
        component: Mlportfolio
    },
    {
        path: '/rlportfolio',
        name: 'rlportfolio',
        component: Rlportfolio
    },
    {
        path: '/technical',
        name: 'technical',
        component: Technical
    },
    {
        path: '/bonds',
        name:'bonds',
        components: Bonds
    },
    {
        path: '/stocks',
        name: 'stocks',
        components: Stocks
    },
    {
        path: '/futures',
        name: 'futures',
        components: Futures
    },
    {
        path: '/optionchina',
        name: 'optionchina',
        components: OptionChina
    }

];