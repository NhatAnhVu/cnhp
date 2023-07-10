import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Login from "../pages/Auth/Login";
import MainLayout from "../layout/MainLayout";
import ContentFullWidth from "../layout/ContentFullWidth";
import Home from "../pages/Home/Home";
import OpenLetter from "../pages/About/OpenLetter";
import History from "../pages/About/History";
import Fields from "../pages/About/Fields";
import CoreValue from "../pages/About/CoreValue";
import Moral from "../pages/About/Moral";
import Culture from "../pages/About/Culture";
import Structure from "../pages/About/Structure";
import ContentLayout from "../layout/ContentLayout";
import Products from "../pages/Services&Products/Products";
import Services from "../pages/Services&Products/Services";
import Installation from "../pages/Services&Products/Installation";
import WaterUsageSearch from "../pages/Services&Products/WaterUsageSearch";
import Bill from "../pages/Services&Products/Bill";
import OnlinePayment from "../pages/Services&Products/OnlinePayment";
import Repair from "../pages/Services&Products/Repair";
import ChangeNameContract from "../pages/Services&Products/ChangeNameContract";
import RenewContract from "../pages/Services&Products/RenewContract";
import ChangeInfo from "../pages/Services&Products/ChangeInfo";
import Procedure from "../pages/CustomerService/Procedure";
import SuspendSchedule from "../pages/CustomerService/SuspendSchedule";
import MeterSchedule from "../pages/CustomerService/MeterSchedule";
import MeterSearch from "../pages/CustomerService/MeterSearch";
import Consumption from "../pages/CustomerService/Consumption";
import InvoiceTool from "../pages/CustomerService/InvoiceTool";
import WaterPrice from "../pages/CustomerService/WaterPrice";
import GeneralPolicy from "../pages/CustomerService/GeneralPolicy";
import SecurityPolicy from "../pages/CustomerService/SecurityPolicy";
import FinancialReport from "../pages/Shareholder/FinancialReport";
import AnnualReport from "../pages/Shareholder/AnnualReport";
import ManagementReport from "../pages/Shareholder/ManagementReport";
import ShareholderInfo from "../pages/Shareholder/ShareholderInfo";
import AnnualMeeting from "../pages/Shareholder/AnnualMeeting";
import ProductionActivity from "../pages/News/ProductionActivity";
import Union from "../pages/News/Union";
import RelatedNews from "../pages/News/RelatedNews";
import Quality from "../pages/Quality/Quality";
import Contact from "../pages/Contact/Contact";
import Search from "../pages/Search/Search";
import { useSelector } from "react-redux";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="dang-nhap" element={<ContentFullWidth />}>
            <Route path="" element={<Login />} />
          </Route>
          <Route element={<Protected />}>
            <Route path="" element={<Home />} />
          </Route>
          <Route path="" element={<ContentFullWidth />}></Route>
          <Route path="gioi-thieu" element={<ContentFullWidth />}>
            <Route
              path="ve-cap-nuoc-hai-phong/thu-ngo"
              element={<OpenLetter />}
            />
            <Route
              path="ve-cap-nuoc-hai-phong/lich-su-phat-trien"
              element={<History />}
            />
            <Route
              path="ve-cap-nuoc-hai-phong/cac-linh-vuc-kinh-doanh"
              element={<Fields />}
            />
            <Route
              path="thong-diep-lanh-dao/gia-tri-cot-loi"
              element={<CoreValue />}
            />
            <Route
              path="thong-diep-lanh-dao/chuan-muc-dao-duc"
              element={<Moral />}
            />
            <Route
              path="thong-diep-lanh-dao/thuc-thi-van-hoa"
              element={<Culture />}
            />
            <Route path="so-do-to-chuc" element={<Structure />} />
          </Route>
          <Route path="san-pham-va-dich-vu" element={<ContentLayout />}>
            <Route path="san-pham" element={<Products />} />
            <Route path="dich-vu" element={<Services />} />
            <Route path="dich-vu/lap-dat-moi" element={<Installation />} />
            <Route
              path="dich-vu/sang-ten-hop-dong-dvcn"
              element={<ChangeNameContract />}
            />
            <Route
              path="dich-vu/cap-lai-hop-dong-dvcn"
              element={<RenewContract />}
            />
            <Route
              path="dich-vu/thanh-toan-truc-tuyen"
              element={<OnlinePayment />}
            />
            <Route path="dich-vu/sua-chua" element={<Repair />} />
            <Route
              path="dich-vu/dang-ky-thay-doi-TTKH"
              element={<ChangeInfo />}
            />
            <Route
              path="dich-vu/tra-cuu-su-dung-nuoc"
              element={<WaterUsageSearch />}
            />
            <Route path="dich-vu/hoa-don-dien-tu" element={<Bill />} />
          </Route>
          <Route path="cham-soc-khach-hang" element={<ContentLayout />}>
            <Route
              path="cac-thu-tuc-khach-hang-can-biet"
              element={<Procedure />}
            />
            <Route
              path="tra-cuu-thong-tin/lich-tam-ngung-cap-nuoc"
              element={<SuspendSchedule />}
            />
            <Route
              path="tra-cuu-thong-tin/lich-ghi-chi-so-cong-to"
              element={<MeterSchedule />}
            />
            <Route
              path="tra-cuu-thong-tin/tra-cuu-chi-so-cong-to"
              element={<MeterSearch />}
            />
            <Route
              path="tra-cuu-thong-tin/luong-nuoc-tieu-thu"
              element={<Consumption />}
            />
            <Route path="cong-cu-tinh-hoa-don" element={<InvoiceTool />} />
            <Route path="gia-nuoc-dinh-muc" element={<WaterPrice />} />
            <Route path="chinh-sach-chung" element={<GeneralPolicy />} />
            <Route path="chinh-sach-bao-mat" element={<SecurityPolicy />} />
          </Route>
          <Route path="co-dong" element={<ContentLayout />}>
            <Route path="bao-cao-tai-chinh" element={<FinancialReport />} />
            <Route path="bao-cao-thuong-nien" element={<AnnualReport />} />
            <Route path="bao-cao-quan-tri" element={<ManagementReport />} />
            <Route path="thong-tin-co-dong" element={<ShareholderInfo />} />
            <Route
              path="dai-hoi-co-dong-thuong-nien"
              element={<AnnualMeeting />}
            />
          </Route>{" "}
          <Route path="tin-tuc" element={<ContentLayout />}>
            <Route
              path="hoat-dong-san-xuat-kinh-doanh"
              element={<ProductionActivity />}
            />
            <Route path="dang-va-doan-the" element={<Union />} />
            <Route path="tin-tuc-lien-quan" element={<RelatedNews />} />
          </Route>
          <Route path="chat-luong-nuoc" element={<ContentLayout />}>
            <Route path="" element={<Quality />} />
          </Route>
          <Route path="lien-he" element={<ContentLayout />}>
            <Route path="" element={<Contact />} />
          </Route>
          <Route path="tim-kiem" element={<ContentLayout />}>
            <Route path="" element={<Search />} />
          </Route>
          <Route path="*" element={<div>Trang khong ton tai</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Protected = ({ redirectPath = "/dang-nhap" }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to={redirectPath} replace />;
};
