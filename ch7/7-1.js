// [불변성]

class Organization {
    #name;
    #country;

    constructor(data) {
        this.#name = data.name;
        this.#country = data.country;
    }

    get name() {
        return this.#name;
    }

    get country() {
        return this.#country;
    }

    get rawData() {
        return { name: this.name, country: this.country };
    }
}

const organization = new Organization({ name: 'Acme Gooseberries', country: 'GB' });

organization.name = 'Dream Coding'; // 이렇게 하면 외부에서 함부로 값을 변경할 수 없다!
console.log(organization.name);
console.log(organization.country);
