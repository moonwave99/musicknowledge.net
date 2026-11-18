---
template: course/lesson
index: 4
id: introduction-to-intervals
slug: course/introduction-to-intervals
title: Introduction to intervals
date: 2026-10-10
description: Our voices jump from note to note. But how big is the leap?
cover:
  id: william_blake_oberon_titania_and_puck_with_fairies_dancing
  caption: William Blake - Oberon, Titania and Puck with Fairies Dancing
---

In the [previous lesson][course:the-major-scale] we got acquainted with the major scale.

Before moving on with chords and progressions, we need a map to better explore the note landscape. Since music is mainly made by notes played together with or followed by other notes (percussive elements aside!), we'd better know how to measure the distances between them.

An interval is **the difference in pitch between two sounds**. If the two sound in questions are notes of a music scale, we can determine the interval **number**, **quality** and **size**.

## The letter landscape

The following notion is extremely important and needs all our attention. It will be needed to tell the **interval number** between two notes.

Let's focus on the first seven letters of the alphabet for a minute. Let's ignore the fact that they coincide with the note names for a moment, let's completely forget about piano keyboards and sounds overall.

Imagine that they repeat over and over, like:

```txt
A B C D E F G | A B C D E F G | A B C D E F G | ...
. . . . . . . | . . . . . . . | . . . . . . . |
```

Let's then measure the possible distance between two letters in the following way:

| From | To                      | Letters visited        | Quantity |
| ---- | ----------------------- | ---------------------- | -------- |
| A    | C                       | A, B, C                | 3        |
| E    | F                       | E, F                   | 2        |
| D    | A                       | D, E, F, G, A          | 5        |
| G    | C                       | G, A, B, C             | 4        |
| C    | A                       | C, D, E, F, G, A       | 6        |
| F    | E                       | F, G, A, B, C, D, E    | 7        |
| C    | C (itself)              | C                      | 1        |
| C    | C (after seven letters) | C, D, E, F, G, A, B, C | 8        |

We can deduce the following for instance:

- consecutive letters have a distance of 2;
- repeating letters have a distance of 8;
- the distance between a letter and itself is 1 (and not zero!);
- very important, the relationship is **not symmetric**, e.g. C to A is 6, but A to C is 3!

More generally, the distance between any two letters is measured by counting **how many letters are visited from the first to the second both included**, and **minding the repetition of the sequence after the letter G**.

We'll refer to this relationship between letter as the **letter landscape** from now on.

Observe that for any pair of letters L1 and L2, the L1-L2 and L2-L1 distances always sum up to 9. Let's check this for all possible combinations of the letter A:

| L1 to L2                  | Distance | L2 to L1     | Distance | Sum       |
| ------------------------- | -------- | ------------ | -------- | --------- |
| A-B                       | 2        | B-A          | 7        | 2 + 7 = 9 |
| A-C                       | 3        | C-A          | 6        | 3 + 6 = 9 |
| A-D                       | 4        | D-A          | 5        | 4 + 5 = 9 |
| A-E                       | 5        | E-A          | 4        | 5 + 4 = 9 |
| A-F                       | 6        | F-A          | 3        | 6 + 3 = 9 |
| A-G                       | 7        | G-A          | 2        | 7 + 2 = 9 |
| A-A (after seven letters) | 8        | A-A (itself) | 1        | 8 + 1 = 9 |

Being able to associate a number between 2 and 8 to any pair of letters between A and G without blinking is paramount in dealing with intervals.

The trick to get it once for all? Seven letters, seven days, one minute a day!

While commuting or jogging, mentally recite for instance _F-G: F, G, two; F-A: F, G, A, three_, and so on, every day starting on a different letter, until they are ingrained forever.

<div class="text-note">

### Little check before moving on

Can you tell the _number_ of the following intervals?

<details>
  <summary>
    G to B?
  </summary>
  G, A, B: three
</details>

<details>
  <summary>
    C to B?
  </summary>
  C, D, E, F, G, A, B: seven
</details>

<details>
  <summary>
    F to C?
  </summary>
  F, A, G, B, C: five
</details>

<details>
  <summary>
    C to F?
  </summary>
  C, D, E, F: four. But also since F to C was 5, the flipped distance must be 9 - 5 = 4!
</details>

I am sure you hit four out of four, aces!

</div>

## The chromatic landscape

Now that we have got the first ingredient, we can say again _musica, maestro_!

Let's walk up the piano keyboard from the middle C (C4) up to the next C (C5), by playing all consecutive notes, white and black:

```abc show-piano show-octaves title="The chromatic scale"
M:1/1
Q:200
L:1/1
C^CD^DEF^FG^GA^ABc
w: 1 2 3 4 5 6 7 8 9 10 11 12 (13)
```

This is called the **chromatic scale**. Let's ignore the score notation for now and let's count for instance how many keys do we need to press in order to go from D to G, **D excluded**:

```abc show-piano show-octaves title="Walking up the chromatic scale from D to G"
M:1/1
Q:200
L:1/1
D^DEF^FG
w: (0) 1 2 3 4 5
```

We said to exclude D so D#, E, F, F#, G: five! But five what? Centimeters, seconds, apples, smiles? Good question, let's give it an answer.

## Semitones and whole tones

Let's consider the distance between two consecutive keys, for instance between E and F:

```abc show-piano show-octaves title="Interval between E4 and F4"
M:1/1
Q:200
L:1/1
EF
```

This distance is called **the semitone**, and it's the smallest possible one can find on a keyboard.

There is a semitone of distance between any pair of consecutive keys of the piano, regardless of the key color:

```abc show-piano show-octaves title="Various semitone examples"
M:1/1
Q:200
L:1/1
C_D | F^F | Bc
```

The name _semitone_ suggests there must be something made up of two of them: exactly, **the whole tone**:

```abc show-piano show-octaves title="Various whole tone examples"
M:1/1
Q:200
L:1/1
CD | FG | E^F | _A_B
```

A whole tone is a distance of two semitones, that is.

In the context of a music scale, semitones and whole tones are the **unit of measure of the interval size**, i.e. for any given pair of notes we can measure their distance in semitones / whole tones, like you measure physical distances and lengths in meters and their multiples and submultiples.

You'll encounter the following nomenclature variations in literature:

- **semitone** or **half step**, for the smallest of the two (e.g. between E and F);
- **whole tone**, simply **tone** or **step** for the other (e.g. between C and D).

Remember that _semi_ means half!

Coming back to the apples and the smiles, we say that the **size** of the interval between D and G is of **five semitones**, or of **two tones and a half**.

Like for the letter landscape, the relationship is **not symmetric**, i.e. the size of D-G differs from that of G-D:

```abc show-piano show-octaves title="Walking up the chromatic scale from D to G"
M:1/1
Q:200
L:1/1
D^DEF^FG | G^GA^ABc^cd
w: (0) 1 2 3 4 5 | (0) 1 2 3 4 5 6 7
```

We can also observe that the sizes of the D-G and G-D intervals sum up to 12, unsurprisingly.

<div class="text-note">

### It's check time

Can you tell the _size_ of the following intervals?

<details>
  <summary>
    G to B?
  </summary>
  (G), G#, A, A#, B: 4 semitones, or 2 tones
</details>

<details>
  <summary>
    C to B?
  </summary>
  (C), C#, D, D#, E, F, F#, G, G#, A, A#, B: 11 semitones, or 5 tones and a half
</details>

<details>
  <summary>
    F to C?
  </summary>
  (F), F#, G, G#, A, A#, B, C: 7 semitones, or 3 tones and a half
</details>

</div>

## The interval of an octave

We are already friends with this pair of notes:

```abc show-piano show-octaves title="Interval between C4 and C5"
M:1/1
Q:200
L:1/1
Cc
```

_Soooome-wheeeere_...exactly! You recognized the opening line of the [beautiful Wizard of Oz song][song:somewhere-over-the-rainbow]. But we still have to talk a bit before boring things before going back to the fun parts.

[We have already seen how instrument notes contain frequencies of other notes][course:the-harmonic-series], and more specific how the relationship between notes with the same fundamental frequency is called the octave relationship. In the example above, we say that there is **an interval of an octave** between C4 and C5.

Since we know what semitones and tones are, we can measure the octave interval by counting how many consecutive keys we need to press _after_ C4 until we reach C5. Twelve!

The following observations can thus be made:

- between any two notes 12 keys apart there is an interval of an octave;
- the octave interval is made of 12 semitones (or 6 tones if you prefer);
- the distance between any two consecutive keys (regardless of the color) is one semitone;
- any octave interval on the piano keyboard will hit seven white keys and five black keys.

Going back to the letter landscape, what's the distance between a letter and the next one with the same name? Eight exactly, hence octave! In fact C(5) is the eight letter after C(4):

```txt
A B C D E F G | A B C D E F G | A B C D E F G | ...
. . ^ . . . . | . . ^ . . . . | . . . . . . . |
    1 2 3 4 5 | 6 7 8
```

We say that the **number** of the C4 to C5 interval is **8** (octave), and its **size** is 12. What about the **interval quality**? We'll trace it back after the next interval, stay in tune.

<div class="text-note">

### Why twelve keys in an octave?

This is actually a very good question but we cannot have worms for dinner tonight, at least not yet.

It's extremely important to know for now that the piano keyboard layout is just **one of the possible ways to divide the octave**, and is called the [equal temperament][wiki:equal-temperament].

While the octave is an intrinsic relationship of the vibration phenomenon, its subdivision in portion to achieve good sounding notes is a **human arbitrary operation**, and [there have been countless of them throughout history and cultures][wiki:musical-tuning].

Your voice can for instance sing _infinite pitches_ between any to notes, try it yourself by mimicking the sound of an engine when shifting gears! But infinite keys on a piano would be quite impractical to build so manufacturers settled for the current (even though [there are alternative layouts][wiki:isomorphic-keyboard]).

TL;DR the music predates the piano by quite a few millennia, so be open to explore the musical landscape not just in terms of distances between white and black keys or positions on the music staff.

</div>

## The interval of a third

Ears open again:

```abc show-piano show-octaves title="Interval between C4 and E4"
M:1/1
Q:200
L:1/1
CE
```

We can already tell the interval number and size:

- For the **number** we explore the **letter landscape**: C, D E, **3**;
- For the **size** we explore the **chromatic landscape**: (C), C#, D, D#, E, **4**.

## The interval of a fifth

We have already encountered this interval after the octave while exploring the harmonic series:

```abc show-piano show-octaves title="Interval between C4 and G4"
M:1/1
Q:200
L:1/1
CG
```

[course:the-major-scale]: /course/the-major-scale
[course:the-harmonic-series]: /course/the-harmonic-series
[song:somewhere-over-the-rainbow]: https://www.youtube.com/watch?v=PSZxmZmBfnU
[wiki:equal-temperament]: https://en.wikipedia.org/wiki/Equal_temperament
[wiki:isomorphic-keyboard]: https://en.wikipedia.org/wiki/Isomorphic_keyboard
[wiki:musical-tuning]: https://en.wikipedia.org/wiki/Musical_tuning#Tuning_systems
