import Lab3 from "./Lab3";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import BackgroundColors from "./Lab2/BackgroundColors";
import BootstrapForms from "./Lab2/BootstrapForms";
import BootstrapGrids from "./Lab2/BootstrapGrids";
import BootstrapLists from "./Lab2/BootstrapLists";
import BootstrapNavigation from "./Lab2/BootstrapNavigation";
import BootstrapTables from "./Lab2/BootstrapTables"
import Borders from "./Lab2/Borders";;
import Corners from "./Lab2/Corners";
import Dimensions from "./Lab2/Dimensions";
import Flex from "./Lab2/Flex";
import Float from "./Lab2/Float";
import ForegroundColors from "./Lab2/ForegroundColors";
import GridLayout from "./Lab2/GridLayout";
import Margins from "./Lab2/Margins";
import Padding from "./Lab2/Padding";
import Positions from "./Lab2/Positions";
import ReactIcons from "./Lab2/ReactIcons";
import ScreenSizeLabel from "./Lab2/ScreenSizeLabel";
import Zindex from "./Lab2/Zindex";

export default function Labs() {
  return (
    <div>

      <h1>Labs</h1>
      <h3>Name: Hualong Xu</h3>
      <h3>Section: 01</h3>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab3" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2/*" element={<Lab2 />} />
        <Route path="Lab2/BackgroundColors" element={<BackgroundColors />} />
        <Route path="Lab2/Borders" element={<Borders />} />
        <Route path="Lab2/BootstrapForms" element={<BootstrapForms />} />
        <Route path="Lab2/BootstrapLists" element={<BootstrapLists />} />
        <Route path="Lab2/BootstrapNavigation" element={<BootstrapNavigation />} />
        <Route path="Lab2/BootstrapTables" element={<BootstrapTables />} />
        <Route path="Lab2/BootstrapGrids" element={<BootstrapGrids />} />
        <Route path="Lab2/Corners" element={<Corners />} />
        <Route path="Lab2/Dimensions" element={<Dimensions />} />
        <Route path="Lab2/Flex" element={<Flex />} />
        <Route path="Lab2/Float" element={<Float />} />
        <Route path="Lab2/ForegroundColors" element={<ForegroundColors />} />
        <Route path="Lab2/GridLayout" element={<GridLayout />} />
        <Route path="Lab2/Margins" element={<Margins />} />
        <Route path="Lab2/Padding" element={<Padding />} />
        <Route path="Lab2/Positions" element={<Positions />} />
        <Route path="Lab2/ReactIcons" element={<ReactIcons />} />
        <Route path="Lab2/ScreenSizeLabel" element={<ScreenSizeLabel />} />
        <Route path="Lab2/Zindex" element={<Zindex />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
);}

