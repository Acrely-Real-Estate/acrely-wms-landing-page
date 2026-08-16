import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { LandingPage } from './pages/LandingPage';
import { ContactPage } from './pages/ContactPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { FeatureDetailsPage } from './pages/FeatureDetailsPage';
import { PricingPage } from './pages/PricingPage';
import { SecurityPage } from './pages/SecurityPage';
import { IntegrationsPage } from './pages/IntegrationsPage';
import { AboutPage } from './pages/AboutPage';
import { CareersPage } from './pages/CareersPage';
import { IndustryDetailsPage } from './pages/IndustryDetailsPage';
import { ImplementationPage } from './pages/ImplementationPage';
import { ProductTourPage } from './pages/ProductTourPage';
import BookDemoPage from './pages/BookDemoPage';
import { DownloadPage } from './pages/DownloadPage';
import { DocsLayout } from './components/docs/DocsLayout';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product-tour" element={<ProductTourPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route
            path="/features/:featureId"
            element={<FeatureDetailsPage />}
          />
          <Route
            path="/industries/:industryId"
            element={<IndustryDetailsPage />}
          />
          <Route
            path="/implementation"
            element={<ImplementationPage />}
          />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route
            path="/integrations"
            element={<IntegrationsPage />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route
            path="/book-demo"
            element={<BookDemoPage />}
          />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />

          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Route>

        <Route
          path="/documentation/*"
          element={<DocsLayout />}
        />
      </Routes>
    </BrowserRouter>
  );
}