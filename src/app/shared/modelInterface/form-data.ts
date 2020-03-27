export interface FormData {

    stepName: string;
    Controls: Array<{
        Field: string;
        Type: string;
        Required: boolean;
        Length?: number;
        MaxLength?: number;
        Options?: Array<string>;
    }>;

  }
