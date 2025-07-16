export function RegisterBasicTagEvents(events: TSEvents) {
    events.Spell.OnCast(GetIDTag('tswow-tests','test-spell-tag'), (spell)=>{
        if(spell.GetCaster().IsPlayer()) {
            let player = spell.GetCaster().ToPlayer();
            if(player) {
                player.SendBroadcastMessage(`LiveScript fired for tagged spell!`)
            }
        }
    })
}