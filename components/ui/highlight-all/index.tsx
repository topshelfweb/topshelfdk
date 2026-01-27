"use client";
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';
import { useEffect } from 'react';

export default function HighlightAll() {
    useEffect(function () {
        hljs.highlightAll();
    }, []);

    return null;
}