import MainNav from "./MainNav";
import SearchBar from "../shared/SearchBar";
import { getCartsThunk } from '../../slices/cartsData/cartsSlice';
import MainCard from "../shared/MainCard";
import {useEffect} from "react";
import { useDispatch,useSelector } from 'react-redux';
import Loader from "../shared/Loader";
import MainChart from "../shared/MainChart";
import MainDashboardTable from "./MainDashboardTable";
interface dashboardCardData{
   "id": number,
    "title": string,
    "price": number,
    "quantity": number,
    "total": number,
    "discountPercentage": number,
    "discountedTotal": number,
    "thumbnail": string,
}
const OverviewPage=({handleActiveSidebar}:{handleActiveSidebar:(state:boolean)=>void})=>{
       const cartsData = useSelector((state) => {
         return state?.carts?.carts;
       });
       const isLoading = useSelector((state) => {
         return state?.carts?.isLoading;
       });
         const dispatch=useDispatch();

        useEffect(()=>{
           dispatch(getCartsThunk());
        },[])
     
        
    type productDataType = string|number;
    let productsTotal: productDataType=0;
    let productsTotalPrice: productDataType = 0;
    let productsTotalQuantity: productDataType = 0;
    let productsDiscountPercentage: productDataType = 0;

    interface cardType {
      title: string;
      analytics: string|number;
      gross: number;
      grossState: boolean;
    }
    let cardsDataList:cardType[]=[];
    let  products = []
    if (!isLoading && cartsData && cartsData.length > 0) {
        products = cartsData[0]?.products;
      productsTotal = products.reduce((acc, el) => {
        return acc + el.total;
      }, 0).toFixed(0);
      productsTotalPrice = products.reduce((acc, el) => {
        return acc + el.price;
      }, 0);
      productsTotalPrice = "$" + productsTotalPrice.toFixed(2);
      productsTotalQuantity = products.reduce((acc, el) => {
        return acc + el.quantity;
      }, 0);
      productsDiscountPercentage = products.reduce((acc, el) => {
        return acc + el.discountPercentage;
      }, 0);
      productsDiscountPercentage = productsDiscountPercentage.toFixed(2) + "%";
      const cartssData: cardType[] = [
        {
          title: "revenue",
          analytics: productsTotalPrice,
          gross: 12.4,
          grossState: true,
        },
        {
          title: "active users",
          analytics: productsTotal,
          gross: 4.1,
          grossState: true,
        },
        {
          title: "orders",
          analytics: productsTotalQuantity,
          gross: 1.8,
          grossState: false,
        },
        {
          title: "conversion",
          analytics: productsDiscountPercentage,
          gross: 0.6,
          grossState: true,
        },
      ];
      cardsDataList = cartssData;
    }
    return (
      <section className="px-9 py-7 w-full h-screen overflow-y-scroll">
        <MainNav handleActiveSidebar={handleActiveSidebar} />
        <section>
          <section className="py-9">
            <h1 className="text-3xl capitalize font-bold leading-9">
              overview
            </h1>
            <p className="text-md  text-muted font-semibold leading-9">
              Here's what's happening with your business today.
            </p>
          </section>
          {/* dashboard cards */}
          {!isLoading ? (
            <section>
              <section className="grid justify-center grid-cols-[repeat(auto-fit,minmax(17rem,1fr))] gap-5">
                {cardsDataList.map((cart, idx) => {
                  return (
                    <MainCard
                      key={idx}
                      title={cart.title}
                      gross={cart.gross}
                      analyticsNum={cart.analytics}
                      grossState={cart.grossState}
                    />
                  );
                })}
              </section>

              <section className="my-4">
                <MainChart data={products} />
              </section>

              <section>
                <MainDashboardTable
                  title="Recent orders"
                />
              </section>
            </section>
          ) : (
            <Loader colorClass="text-accent" size="7xl" />
          )}
        </section>
      </section>
    );
}
export default OverviewPage;