// Author: Ergogen + @infused-kim improvements
//
// @infused-kim's improvements:
//  - Added option to hide thru-holes
//  - Added virtual attribute to silence DRC error
//  - Added attribute to indicate which side to include diode. Values can be "front", "back", or "both"

module.exports = {
    params: {
        designator: 'D',
        include_tht: true,
        from: undefined,
        to: undefined,
        side: 'back'
    },
    body: p => {

        const tht = `
        (pad 1 thru_hole rect (at -3.81 0 ${p.rot}) (size 1.778 1.778) (drill 0.9906) (layers *.Cu *.Mask) ${p.to.str})
        (pad 2 thru_hole circle (at 3.81 0 ${p.rot}) (size 1.905 1.905) (drill 0.9906) (layers *.Cu *.Mask) ${p.from.str})
        `;

        const back = `
        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer B.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer B.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

        ${''/* diode symbols */}
        (fp_line (start 0.25 0) (end 0.75 0) (layer B.SilkS) (width 0.1))
        (fp_line (start 0.25 0.4) (end -0.35 0) (layer B.SilkS) (width 0.1))
        (fp_line (start 0.25 -0.4) (end 0.25 0.4) (layer B.SilkS) (width 0.1))
        (fp_line (start -0.35 0) (end 0.25 -0.4) (layer B.SilkS) (width 0.1))
        (fp_line (start -0.35 0) (end -0.35 0.55) (layer B.SilkS) (width 0.1))
        (fp_line (start -0.35 0) (end -0.35 -0.55) (layer B.SilkS) (width 0.1))
        (fp_line (start -0.75 0) (end -0.35 0) (layer B.SilkS) (width 0.1))

        ${''/* SMD pads on both sides */}
        (pad 1 smd rect (at -1.65 0 ${p.rot}) (size 0.9 1.2) (layers B.Cu B.Paste B.Mask) ${p.to.str})
        (pad 2 smd rect (at 1.65 0 ${p.rot}) (size 0.9 1.2) (layers B.Cu B.Paste B.Mask) ${p.from.str})
        `

        const front = `
        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
        
        ${''/* diode symbols */}
        (fp_line (start 0.25 0) (end 0.75 0) (layer F.SilkS) (width 0.1))
        (fp_line (start 0.25 0.4) (end -0.35 0) (layer F.SilkS) (width 0.1))
        (fp_line (start 0.25 -0.4) (end 0.25 0.4) (layer F.SilkS) (width 0.1))
        (fp_line (start -0.35 0) (end 0.25 -0.4) (layer F.SilkS) (width 0.1))
        (fp_line (start -0.35 0) (end -0.35 0.55) (layer F.SilkS) (width 0.1))
        (fp_line (start -0.35 0) (end -0.35 -0.55) (layer F.SilkS) (width 0.1))
        (fp_line (start -0.75 0) (end -0.35 0) (layer F.SilkS) (width 0.1))

        ${''/* SMD pads on both sides */}
        (pad 1 smd rect (at -1.65 0 ${p.rot}) (size 0.9 1.2) (layers F.Cu F.Paste F.Mask) ${p.to.str})
        (pad 2 smd rect (at 1.65 0 ${p.rot}) (size 0.9 1.2) (layers F.Cu F.Paste F.Mask) ${p.from.str})
        `

        const footprint = `
        (module ComboDiode (layer ${ p.side == 'back' ? 'B' : 'F' }.Cu) (tedit 5B24D78E)
            ${p.at /* parametric position */}
            (attr virtual)
    
            ${ p.side == 'front' || p.side == 'both' ? front : '' }
            ${ p.side == 'back' || p.side == 'both' ? back : '' }
            
            ${''/* THT terminals */}
            ${ p.include_tht ? tht : '' }
        )
        `

        return footprint;
    }
}
