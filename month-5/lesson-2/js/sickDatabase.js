const SickDb = JSON.parse(localStorage.getItem("patient")) || [];

class sick {
  constructor({ fullname, address, sickness, gender, level, phoneNumber }) {
    this.fullname = fullname;
    this.address = address;
    this.sickness = sickness;
    this.gender = gender;
    this.level = level;
    this.phoneNumber = phoneNumber;
  }

  save() {
    const newSick = {
      id: SickDb.length,
      ...this,
    };
    SickDb.push(newSick);
    localStorage.setItem("patient", JSON.stringify(SickDb));
    return newSick;
  }
  static deleteById(id) {
    const index = SickDb.findIndex((item) => item.id === Number(id));
    if (index !== -1) {
      SickDb.splice(index, 1);
      localStorage.setItem("patient", JSON.stringify(SickDb));
      this.Render();
    } else {
      console.log("not found");
    }
    // SickDb.splice(id, 1);
    // localStorage.setItem("patient", JSON.stringify(SickDb));
  }

  static Render(renderElId = "tableBody") {
    const renderEl = document.getElementById(renderElId);
    renderEl.innerHTML = "";
    for (let patient of SickDb) {
      const { id, fullname, sickness, address, phoneNumber, level, gender } =
        patient;
      const tample = `
      <tr>
      <th scope="row">${id}</th>
      <td>${fullname}</td>
      <td>${sickness}</td>
      <td>${address}</td>
      <td>${phoneNumber}</td>
      <td>${level}</td>
      <td>${gender}</td>
      <td><button class="btn btn-danger" onclick="sick.deleteById('${id}')"</button>Delete</td>
      
    </tr>
        `;
      renderEl.innerHTML += tample;
    }
  }
}
sick.Render();
