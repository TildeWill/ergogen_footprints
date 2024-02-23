// Description:
// Allows you to place text on the PCB.

module.exports = {
  params: {
    designator: 'TXT',
    side: 'F',
    text: 'Hello world!',
    h_size: 1,
    v_size: 1,
    thickness: 0.15,
    justify: "",
  },
  body: p => {
    let justify = "";
    if (p.justify != "") {
      justify = `(justify ${p.justify})`;
    }

    const front = `
      (gr_text "${p.text}" ${p.at} (layer F.SilkS)
        (effects (font (size 1 1) (thickness 0.15)))
      )
    `
    const back = `
      (gr_text "${p.text}" ${p.at} (layer B.SilkS)
        (effects (font (size ${p.h_size} ${p.v_size}) (thickness ${p.thickness})) ${justify})
      )
    `

    let final = '';

    if(p.side == "F") {
      final += front;
    }
    if(p.side == "B") {
      final += back;
    }

    return final;
  }
}
