import "./index.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import SidebarPro from "./scenes/global/SidebarPro";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team/Team";
import Contacts from "./scenes/contacts/Contacts";
import Invoices from "./scenes/invoices/Invoices";

import Form from "./scenes/form/ProfileForm";
import Calendar from "./scenes/calendar/Calendar";
import FAQ from "./scenes/faq/FAQ";
import Bar from "./scenes/bar/Bar";
import Pie from "./scenes/pie/Pie";
import Line from "./scenes/line/Line";

import Geography from "./scenes/geography/Geography";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="app">
            <SidebarPro />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/geography" element={<Geography />} />
              </Routes>
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
