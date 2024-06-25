import React, { useState, useEffect, useMemo } from "react";

const Contact = (): React.ReactElement => {
  const cachedLanguages = useMemo(() => {
    return [
      "Hello",
      "Hola",
      "Bonjour",
      "Guten Tag",
      "Ciao",
      "Olá",
      "Здравствуйте",
      "你好",
      "こんにちは",
      "안녕하세요",
      "مرحبا",
      "नमस्ते",
      "হ্যালো",
      "Merhaba",
      "Γειά σου",
      "שלום",
      "Habari",
      "Hallo",
      "Hej",
      "สวัสดี",
    ];
  }, []);

  const [currentHello, setCurrentHello] = useState<string>(cachedLanguages[0]);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % cachedLanguages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [cachedLanguages.length]);

  useEffect(() => {
    setCurrentHello(cachedLanguages[index]);
  }, [cachedLanguages, index]);

  return (
    <ul className="flex gap-2 p-8">
      <li className="flex animate-fade-right">
        <span className="h-fit bg-yellow-400 px-2 ">{`Say ${currentHello}`}</span>
      </li>
      <li className="">
        <a href="gilcassone@protonmail.com">gilcassone@protonmail.com</a>
        <br />
        <a href="https://raulcassone.io"> Check my dev Portfolio.</a>
      </li>
    </ul>
  );
};

export default Contact;
