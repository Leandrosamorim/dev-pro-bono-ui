export class Developer {
    uId: string;
    name: string;
    contact: {
        id: string,
        email: string,
        phone: string
    };
    stackName: string;
}

export class UpdateDeveloperCommand{
    uId: string;
    name: string;
    contact: {
        id: string,
        email: string,
        phone: string
    };
    stackId: number;
}