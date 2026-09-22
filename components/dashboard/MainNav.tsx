import { BellRing } from "lucide-react";
import SearchBar from '../shared/SearchBar';
import { Menu } from "lucide-react";
import Image from "next/image"
import { useEffect } from "react";
import { useSelector,useDispatch} from "react-redux";
import { authMeThunk } from "@/slices/login/loginSlice";

const MainNav = ({handleActiveSidebar}:{handleActiveSidebar:(state:boolean)=>void}) => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(authMeThunk());  
    },[])
    const userData=useSelector((state)=>{
        return state?.login?.userData;
    })
    
    const isLoading=useSelector(state=>{
        return state?.login?.isLoading;
    })
    
  return (
    <section className="flex items-center gap-5 justify-between">
      <Menu
        className="block xl:hidden cursor-pointer"
        onClick={() => handleActiveSidebar(true)}
      />
      <SearchBar />
      <section className="flex items-center gap-3">
        <section className="bg-card p-3 w-fit rounded-full cursor-pointer">
          <BellRing />
        </section>
        <section className="flex items-center gap-3 cursor-pointer">
          <section className="rounded-full size-11 relative overflow-hidden">
            <Image
              src={(!isLoading && userData?.image) ? userData.image : "/myIm.jpg"}
              fill
              alt="Profile Pic"
              className="object-cover"
            />
          </section>
          <span className="font-bold capitalize">{userData?.username||"unknown"}</span>
        </section>
      </section>
    </section>
  );
};
export default MainNav;
