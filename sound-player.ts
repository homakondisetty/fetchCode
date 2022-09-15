export class SoundPlayer {
  constructor(public foo: String = "red") {}
  playSoundFile = (fileName: String) =>
    console.log(`Playing sound file ${fileName}`);
}

export class SoundPlayerConsumer extends SoundPlayer {
  constructor(public coolSoundFileName: String = "song.mp3") {
    super();
  }
  playSomethingCool = () => {
    this.playSoundFile(this.coolSoundFileName);
  };
}
