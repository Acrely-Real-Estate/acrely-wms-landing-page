export const requirementsList = [
  "Inventory Management",
  "Barcode Scanning",
  "Receiving",
  "Putaway",
  "Picking",
  "Packing",
  "Dispatch",
  "Returns",
  "Cycle Counting",
  "Multi-Warehouse",
  "Reporting",
  "API / Integrations",
  "Other",
];

export interface BookDemoFormData {
  companyName: string;
  companyWebsite: string;
  contactPerson: string;
  jobTitle: string;
  businessEmail: string;
  mobileNumber: string;

  industry: string;
  companySize: string;
  numberOfWarehouses: string;
  totalWarehouseArea: string;
  country: string;
  stateRegion: string;
  city: string;

  currentManagement: string;
  averageDailyOrders: string;
  averageDailyReceiving: string;
  numberOfWarehouseEmployees: string;
  numberOfWarehouseUsers: string;

  requirements: string[];
  operationalChallenges: string;

  implementationTimeline: string;
  additionalRequirements: string;
}

export type FormErrors = Partial<
  Record<keyof BookDemoFormData, string>
>;

export const initialFormData: BookDemoFormData = {
  companyName: "",
  companyWebsite: "",
  contactPerson: "",
  jobTitle: "",
  businessEmail: "",
  mobileNumber: "",

  industry: "",
  companySize: "",
  numberOfWarehouses: "",
  totalWarehouseArea: "",
  country: "",
  stateRegion: "",
  city: "",

  currentManagement: "",
  averageDailyOrders: "",
  averageDailyReceiving: "",
  numberOfWarehouseEmployees: "",
  numberOfWarehouseUsers: "",

  requirements: [],
  operationalChallenges: "",

  implementationTimeline: "",
  additionalRequirements: "",
};

export function validateBookDemoForm(
  formData: BookDemoFormData
): FormErrors {
  const errors: FormErrors = {};

  if (!formData.companyName.trim()) {
    errors.companyName = "Company name is required";
  }

  if (!formData.contactPerson.trim()) {
    errors.contactPerson = "Contact person is required";
  }

  if (!formData.jobTitle.trim()) {
    errors.jobTitle = "Job title is required";
  }

  if (!formData.businessEmail.trim()) {
    errors.businessEmail = "Business email is required";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      formData.businessEmail
    )
  ) {
    errors.businessEmail = "Enter a valid business email";
  }

  if (!formData.mobileNumber.trim()) {
    errors.mobileNumber = "Mobile number is required";
  }

  if (!formData.industry) {
    errors.industry = "Industry is required";
  }

  if (!formData.companySize) {
    errors.companySize = "Company size is required";
  }

  if (!formData.numberOfWarehouses.trim()) {
    errors.numberOfWarehouses =
      "Number of warehouses is required";
  }

  if (!formData.totalWarehouseArea.trim()) {
    errors.totalWarehouseArea =
      "Warehouse area is required";
  }

  if (!formData.country.trim()) {
    errors.country = "Country is required";
  }

  return errors;
}

import type React from 'react';

export function handleFormInputChange(
  event: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >,
  setFormData: React.Dispatch<
    React.SetStateAction<BookDemoFormData>
  >
) {
  const { name, value } = event.target;

  setFormData((previous) => ({
    ...previous,
    [name]: value,
  }));
}

export function toggleRequirement(
  requirement: string,
  setFormData: React.Dispatch<
    React.SetStateAction<BookDemoFormData>
  >
) {
  setFormData((previous) => {
    const exists = previous.requirements.includes(requirement);

    return {
      ...previous,
      requirements: exists
        ? previous.requirements.filter(
            (item) => item !== requirement
          )
        : [...previous.requirements, requirement],
    };
  });
}

export async function submitBookDemo(
  formData: BookDemoFormData
) {
  const apiUrl =
    ((import.meta as any).env?.VITE_API_URL as string) ||
    "http://localhost:5000";

  const response = await fetch(
    `${apiUrl}/api/book-demo`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  let data;

  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    throw new Error(
      data?.message ||
        "Unable to submit your demo request."
    );
  }

  return data;
}