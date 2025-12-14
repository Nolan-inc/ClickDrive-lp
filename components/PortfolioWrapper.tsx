import React from 'react';
import PortfolioSection from './PortfolioSection';
import { getActiveWebsites, getCategories } from '@/lib/portfolio';

interface PortfolioWrapperProps {
  themeColor?: string;
  primaryColor?: string;
  secondaryColor?: string | null;
  accentColor?: string | null;
  lineUrl?: string | null;
}

export default async function PortfolioWrapper({
  themeColor = "#8b5cf6",
  primaryColor = "#7c3aed",
  secondaryColor = null,
  accentColor = null,
  lineUrl = null
}: PortfolioWrapperProps) {
  // サーバーサイドでデータを取得
  const [websites, categories] = await Promise.all([
    getActiveWebsites(),
    getCategories()
  ]);

  return (
    <PortfolioSection
      portfolioItems={websites}
      categories={categories}
      themeColor={themeColor}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      accentColor={accentColor}
      lineUrl={lineUrl}
    />
  );
}