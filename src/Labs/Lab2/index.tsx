import "./index.css";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';

export default function Lab2() {
    return (
      <Container>

      <div id="wd-lab2">
        
        <h2>Lab 2 - Cascading Style Sheets</h2>
        <ul>
          <li><Link to="/Labs/Lab2/BackgroundColors">BackgroundColors</Link></li>
          <li><Link to="/Labs/Lab2/Borders">ReactIBorderscons</Link></li>
          <li><Link to="/Labs/Lab2/BootstrapForms">BootstrapForms</Link></li>
          <li><Link to="/Labs/Lab2/BootstrapGrids">BootstrapGrids</Link></li>
          <li><Link to="/Labs/Lab2/BootstrapLists">BootstrapLists</Link></li>
          <li><Link to="/Labs/Lab2/BootstrapNavigation">BootstrapNavigation</Link></li>
          <li><Link to="/Labs/Lab2/BootstrapTables">BootstrapTables</Link></li>
          <li><Link to="/Labs/Lab2/Corners">Corners</Link></li>
          <li><Link to="/Labs/Lab2/Dimensions">Dimensions</Link></li>
          <li><Link to="/Labs/Lab2/Flex">Flex</Link></li>
          <li><Link to="/Labs/Lab2/Float">Float</Link></li>
          <li><Link to="/Labs/Lab2/ForegroundColors">ForegroundColors</Link></li>
          <li><Link to="/Labs/Lab2/GridLayout">GridLayout</Link></li>
          <li><Link to="/Labs/Lab2/Margins">Margins</Link></li>
          <li><Link to="/Labs/Lab2/Padding">Padding</Link></li>
          <li><Link to="/Labs/Lab2/Positions">Positions</Link></li>
          <li><Link to="/Labs/Lab2/ReactIcons">ReactIcons</Link></li>
          <li><Link to="/Labs/Lab2/ScreenSizeLabel">ScreenSizeLabel</Link></li>
          <li><Link to="/Labs/Lab2/Zindex">Zindex</Link></li>
        </ul>
        <h3>Styling with the STYLE attribute</h3>
        <p>
          Style attribute allows configuring look and feel right on the element.
          Although it's very convenient it is considered bad practice and you
          should avoid using the style attribute.
        </p>

        <div id="wd-css-id-selectors">
          <h3>ID selectors</h3>
          <p id="wd-id-selector-1">
            Instead of changing the look and feel of all the elements of the
            same name, e.g., P, we can refer to a specific element by its ID.
          </p>
          <p id="wd-id-selector-2">
            Here's another paragraph using a different ID and a different look
            and feel.
          </p>
        </div>
        <div id="wd-css-class-selectors">
          <h3>Class selectors</h3>
          <p className="wd-class-selector">
            Instead of using IDs to refer to elements, you can use an element's
            CLASS attribute.
          </p>
          <h4 className="wd-class-selector">
            This heading has same style as paragraph above.
          </h4>
        </div>
        <div id="wd-css-document-structure">
          <div className="wd-selector-1">
            <h3>Document structure selectors</h3>
            <div className="wd-selector-2">
              Selectors can be combined to refer elements in particular places
              in the document
              <p className="wd-selector-3">
                This paragraph's red background is referened as
                <br />
                .selector-2 .selector3<br />
                meaning the descendant of some ancestor.<br />
                <span className="wd-selector-4">
                  Whereas this span is a direct child of its parent
                </span><br />
                You can combine these relationships to create specific styles 
                depending on the document structure.
              </p>
            </div>
          </div>
        </div>
        

        

      </div>
      </Container>
  );}
  
  