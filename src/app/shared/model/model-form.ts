import { FormData } from "../modelInterface/form-data";

export const ModelForm: FormData[] = [
    {
        stepName: "Step 1",
        Controls: [
            {
                Field: "First Name",
                Type: "text",
                Required: true,
                Length: 3
            },
            {
                Field: "Last Name",
                Type: "text",
                Required: true,
                Length: 3
            },
            {
                Field: "Email",
                Type: "email",
                Required: true,
                Length: 3
            },
            {
                Field: "Address",
                Type: "textarea",
                Required: true,
                Length: 30,
                MaxLength:150
            },
        ]
    },
    {
        stepName: "Step 2",
        Controls: [
            {
                Field: "Interested In?",
                Type: "checkbox",
                Required: true,
                Options: ["Books", "TV", "Video games"]
            },
        ]
    },
];
