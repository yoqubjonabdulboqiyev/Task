

export type ID = number;

export type JwtPayloadType = {
    sub: string;
};

export enum Roles {
    ADMIN = "admin",
    NORMAL = "normal",
    LIMITED = "limeted"
}