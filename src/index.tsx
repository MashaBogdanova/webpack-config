import * as React from "react";
import {createRoot} from "react-dom/client";
import {App} from '@/components/App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Shop} from "@/components/Shop/Shop";

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root not found')
}

const container = createRoot(root)

container.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="/about" element={<h1>About</h1>}/>
        <Route path="/shop" element={<Shop/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
