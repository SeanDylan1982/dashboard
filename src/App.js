import React from 'react';

import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard/index.jsx";
import Team from "./scenes/team/index.jsx";
import Invoices from "./scenes/invoices/index.jsx";
import Contacts from "./scenes/contacts/index.jsx";
import Form from "./scenes/form/index.jsx";
// import Bar from "./scenes/bar/index.jsx";
// import Line from "./scenes/line/index.jsx";
// import Pie from "./scenes/pie/index.jsx";
// import FAQ from "./scenes/faq/index.jsx";
// import Geography from "./scenes/geography/index.jsx";
// import Calendar from "./scenes/calendar/index.jsx";



function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value ={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                {/* <Route path="/bar" element={<Bar />} /> */}
                {/* <Route path="/pie" element={<Pie />} /> */}
                {/* <Route path="/line" element={<Line />} /> */}
                {/* <Route path="/faq" element={<FAQ />} /> */}
                {/* <Route path="/geography" element={<Geography />} /> */}
                {/* <Route path="/calendar" element={<Calendar />} /> */}
              </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    ); 
}

export default App;
