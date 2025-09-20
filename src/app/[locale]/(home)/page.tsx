"use client";
import MenuBar from "Components/layout/menu-bar";
import { useTranslations } from "next-intl";
import React, { useEffect } from "react";

export default function Home() {

  return (
    <div>
      {/* {t("title")} */}
      <MenuBar />
    </div>
  );
}
