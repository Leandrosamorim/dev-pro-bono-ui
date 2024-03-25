export class Organization {
    uId: string;
    name: string;
    contact: {
        id: string,
        email: string,
        phone: string
    };
    description: string;
}

export class UpdateOrganizationCommand{
    uId: string;
    name: string;
    contact: {
        id: string,
        email: string,
        phone: string
    };
    description: string;
}