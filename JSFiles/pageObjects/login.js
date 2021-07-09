"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const protractor_1 = require("protractor");
class login {
    constructor() {
        this.email = protractor_1.element(protractor_1.by.id("email"));
        this.pass = protractor_1.element(protractor_1.by.id("password"));
        this.singIn = protractor_1.element(protractor_1.by.tagName("button"));
    }
}
exports.login = login;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9sb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBd0Q7QUFFeEQsTUFBYSxLQUFLO0lBTWQ7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBQ0o7QUFYRCxzQkFXQyJ9