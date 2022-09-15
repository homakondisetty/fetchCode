import { SoundPlayer, SoundPlayerConsumer} from "../sound-player";
describe('Test Sound player', () =>{
    test('SoundPlayer', ()=>{
        console.log = jest.fn();
        // GIVEN
        const objSoundPlayer = new SoundPlayer();
        // WHEN
        objSoundPlayer.playSoundFile("Green");
        // THEN
        expect(console.log).toBeCalledWith("Playing sound file Green");
    }),
    test('SoundPlayerConsumer', () =>{
        console.log= jest.fn();
        // GIVEN 
        const objSoundPlayerConsumer = new SoundPlayerConsumer();
        // WHEN 
        objSoundPlayerConsumer.playSomethingCool();
        // THEN
        expect(console.log).toBeCalledWith('Playing sound file song.mp3');
    }) 
})