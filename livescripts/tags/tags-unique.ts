export function RegisterUniqueTagEvents(events: TSEvents) {
    events.Spell.OnCast(GetIDTagUnique('tswow-tests','unique-id-tag'),spell=>{
        if(spell.GetCaster().IsPlayer()) {
            let player = spell.GetCaster().ToPlayer();
            if(player) {
                player.SendBroadcastMessage(`LiveScript fired for uniquely tagged spell!`)
            }
        }
    })
}