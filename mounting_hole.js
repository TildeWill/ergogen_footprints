// MountingHole_2.2mm_M2_Pad_Via
module.exports = {
  params: {
    designator: 'H',
  },
  body: p => `
    (module MountingHole (layer F.Cu) (tedit 56DDB9C7)
      ${p.at /* parametric position */} 
    
      (fp_text reference "${p.ref}" (at 0 -3.2) (layer F.SilkS) ${p.ref_hide} 
        (effects (font (size 1 1) (thickness 0.15)))
      )
    
      (pad 1 thru_hole circle (at 1.166726 1.166726) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) )
      (pad 1 thru_hole circle (at 0 0) (size 4.4 4.4) (drill 2.2) (layers *.Cu *.Mask) )
      (pad 1 thru_hole circle (at 0 1.65) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) )
      (pad 1 thru_hole circle (at 1.166726 -1.166726) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) )
      (pad 1 thru_hole circle (at -1.65 0) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) )
      (pad 1 thru_hole circle (at -1.166726 -1.166726) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) )
      (pad 1 thru_hole circle (at -1.166726 1.166726) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) )
      (pad 1 thru_hole circle (at 1.65 0) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) )
      (pad 1 thru_hole circle (at 0 -1.65) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) )
    )`
}
