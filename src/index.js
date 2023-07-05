import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Azkar from './components/azkar';
import Zekr from './components/zekr';
import Tafsser from './components/Tafsser';
import Surah from './components/surah';
import Quran from './components/Quran';
import Quran_audio from './components/Quran-audio';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
              <BrowserRouter>
                    <Routes>
                        <Route path='/taqwa-web' element = {<App />}/>
                        <Route path='/taqwa-web/' element = {<App />}/>
                        <Route path='/' element = {<App />}/>
                        <Route index element = {<App />}/>
                        <Route path="/azkar" element={<Azkar />}/>
                        <Route path="/zekr" element={<Zekr />}/>
                        <Route path="/tafsser" element={<Tafsser />}/>
                        <Route path="/Surah" element={<Surah />}/>
                        <Route path="/Quran" element={<Quran />}/>
                        <Route path="/Quran-audio" element={<Quran_audio />}/>
                    </Routes>
                </BrowserRouter>
);

