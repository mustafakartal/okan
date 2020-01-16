export class MenuList {
    Menu: Menu;
    SubMenu: Menu[];
}

export class Menu {
    Name: string;
    Icon: string;
    Link: string;
    SortOrder: number;
    IsActive: boolean;
}