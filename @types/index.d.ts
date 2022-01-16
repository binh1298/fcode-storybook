import commonNs from "../src/i18n/en/common.json";

import "react-i18next";

declare module "react-i18next" {
    interface CustomTypeOptions {
        resources: {
            common: typeof commonNs;
        };
    }
}
