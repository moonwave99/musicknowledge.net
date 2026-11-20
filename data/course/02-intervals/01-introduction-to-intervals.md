---
template: course/lesson
module: intervals
index: 2.1
id: introduction-to-intervals
slug: course/introduction-to-intervals
title: Introduction to intervals
description: Our voices jump from note to note. But how big is the leap?
cover:
  id: johannes_vermeer_the_music_lesson
  caption: Johannes Vermeer - The music lesson
---

In the [previous lesson][course:introduction-to-music-notation] we got acquainted with the music notation.

Before moving on with scales, chords and progressions, we need a map to better explore the note territory. Since music is mainly made by notes played together with or followed by other notes (percussive elements aside!), we must know how to categorize the distances between them.

## Definition and properties of an interval

An interval is **the difference in pitch between two sounds**. If the two sound in questions are notes of a music scale, we can determine the interval **number**, **quality** and **size**.

An interval is usually expressed by the quality followed by the ordinal number, e.g.:

- C-E: **major third**;
- E-F: **minor second**;
- F-Bb: **perfect fourth**.

The interval size is unambiguously associated to every quality/number pair.

We'll discuss the possible interval qualities and the size determination process in the next lessons, just get familiar with the nomenclature for now.

### Melodic vs. harmonic intervals

An interval is **melodic** if the notes are played in sequence, and **harmonic** if they are played together. Both share the same interval, quality and size.

```abc show-piano show-octaves title="Example of a melodic and an harmonic interval"
M:1/1
Q:200
L:1/1
CE | [CE]
```

### Ascending vs. descending intervals

An interval is **ascending** if the second note is higher in pitch than the first, and **descending** in the opposite case:

```abc show-piano show-octaves title="Example of an ascending and a descending interval"
M:1/1
Q:200
L:1/1
CE | EC
```

Even in this case all three properties are the same for both versions.

We'll now see two concepts we'll use to determine the number, quality and size of any interval: the **letter landscape** and **the chromatic landscape**. The former gives us the **number**, the latter the **size**, and with both information will eventually get the **quality**.

### Simple vs. compound intervals

An interval is **simple** if its size doesn't exceed the octave, and **compound** otherwise:

```abc show-piano show-octaves title="Example of a simple and a compound interval"
M:1/1
Q:200
L:1/1
CE | Cd
```

The first interval (C4-E4) is contained in the fourth octave, while the second (C4-D5) exceeds its.

A compound interval can always be split in an octave plus a simple interval, for instance:

```abc show-piano show-octaves title="A compound interval split into an octave and a simple interval"
M:1/1
Q:200
L:1/1
Cd || Cc | cd
```

### Sum of intervals

Intervals can be added, even though not exactly like one would add natural numbers.

Given for instance the C-E and E-G intervals, we can take into consideration the interval between the first note of the former interval, and the second of the latter:

```abc show-piano show-octaves title="The sum of C4-E4 and E4-G4, C4-G4"
M:1/1
Q:200
L:1/1
CE | EG | CG
```

### Inverted intervals

For every interval we find its **inverted or reciprocal interval** by rising the first note by an octave, and flipping the two notes, for example:

```abc show-piano show-octaves title="The C4-E4 interval and its inversion E4-C5"
M:1/1
Q:200
L:1/1
CE | Ec
```

Observe how the size of any interval plus its inversion **is always an octave** by construction, since the first note of the original interval becomes the second note of the inversion one octave higher:

```abc show-piano show-octaves title="Various intervals and their respective inversions"
M:1/1
Q:200
L:1/1
GB | Bg || DA | Ad || _E F | F _e
```

## The letter landscape

Let's focus on the first seven letters of the alphabet for a moment. Let's ignore the fact that they coincide with the note names for a moment and let's completely forget about piano keyboards, notes and sounds overall.

Imagine that the letters A-G repeat over and over, like:

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

We'll refer to this relationship between letters as the **letter landscape** from now on.

### Our first exploration together

Let's measure the distance between F and C to see if we got it:

```txt
A B C D E F G | A B C D E F G
. . . . . 1 2 | 3 4 5 . . . .
```

- we start counting from F (1);
- we walk up over G (2), A (3), B (4);
- until we reach C (5).

Many music students fail to memorize these relationships because they haven't explored the letter landscape properly, and find then hard to follow more advanced lessons because they always have to stop to calculate things. Don't be flipping-fingers Joe finding out what interval is A to F while the rest of the classroom already shreds, do your landscape wanderings from the beginning of the journey!

### Complementary relationships over the landscape

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

Start getting familiar with these pairs then, because we'll encounter them pretty often:

- 1 and 8;
- 2 and 7;
- 3 and 6;
- 4 and 5.

Being able to associate a number between 2 and 8 to any pair of letters between A and G without blinking is paramount in dealing with intervals.

The trick to get it once for all? Seven letters, seven days, one minute a day!

While commuting or jogging, mentally recite for instance _F-G: F, G, two; F-A: F, G, A, three_, and so on, every day starting on a different letter, until they are ingrained forever.

<div class="text-note">

### Little check before moving on

Can you tell the **number** of the following intervals?

<details>
  <summary>
    G to B?
  </summary>
  G, A, B: 3/third
</details>

<details>
  <summary>
    C to B?
  </summary>
  C, D, E, F, G, A, B: 7/seventh
</details>

<details>
  <summary>
    F to C?
  </summary>
  F, A, G, B, C: 5/fifth
</details>

<details>
  <summary>
    C to F?
  </summary>

C, D, E, F: 4/fourth.

But also because since F to C was 5, the flipped distance must be 9 - 5 = 4 again!

I am sure you hit four out of four, aces!

</details>

</div>

## The chromatic landscape

Now that we have got the first ingredient, we can say again _musica, maestro_!

Let's walk up the piano keyboard from the middle C (C4) up to the next C (C5), by playing all consecutive keys, white and black:

```abc show-piano show-octaves title="The chromatic scale"
M:1/1
Q:200
L:1/1
C^CD^DEF^FG^GA^ABc
w: 1 2 3 4 5 6 7 8 9 10 11 12 (13)
```

This is called the (ascending) **chromatic scale**.

Let's count how many keys do we need to press to reach G from D, **D excluded**:

```abc show-piano show-octaves title="Walking up the chromatic scale from D to G"
M:1/1
Q:200
L:1/1
D^DEF^FG
w: (0) 1 2 3 4 5
```

Ready? D# (1), E (2), F (3), F# (4), G (5): five!

<div class="text-note">

### A note on enharmonics

The (ascending) chromatic scale is usually represented just with sharp signs. What about flats?

```abc show-piano show-octaves title="The chromatic scale with flat signs"
M:1/1
Q:200
L:1/1
C_D=D_E=EF_G=G_A=A_B=Bc
w: 1 2 3 4 5 6 7 8 9 10 11 12 (13)
```

See how we have to prepend a natural sign before each note coming after its flatted version. Now you know why sharps are preferred! But being aware of this **dual representation** is important and helpful at the beginning of your navigation of the chromatic landscape.

Let's measure the distance between C and Eb for example:

```abc show-piano show-octaves title="Walking up the chromatic scale from C to Eb"
M:1/1
Q:200
L:1/1
C_D=D_E
w: (0) 1 2 3
```

Observe how it coincides with that between C and D#:

```abc show-piano show-octaves title="Walking up the chromatic scale from C to Eb"
M:1/1
Q:200
L:1/1
C^CD^D
w: (0) 1 2 3
```

That's because the notes D# and Eb **are represented by the same key on the keyboard**.

</div>

We said that the distance between D and G over the chromatic landscape if five, but five what? Centimeters, seconds, apples, smiles? Good question, let's give it an answer.

## Semitones and whole tones

Let's consider the distance between two consecutive keys, for instance between E and F:

```abc show-piano show-octaves title="Interval between E4 and F4"
M:1/1
Q:200
L:1/1
EF
```

E (0) to F(1), **one**. This distance is called **the semitone**, the smallest possible on a keyboard.

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

We can also observe that the sizes of the D-G and G-D intervals sum up to 12, like the amount of notes of the whole chromatic scale unsurprisingly.

<div class="text-note">

### It's check time

Can you tell the **size** of the following intervals?

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

## Conclusion

We defined what intervals are and their properties, and visited the letter and chromatic landscapes. We know what semitones and tones are.

Remember that the ultimate goal of interval study is knowing every possible note pair properties by heart without hesitation. Take all the time of the world to absorb the concepts of this lesson in depth, then start your daily interval drill and you'll be at professional level way before you would expect.

## Exercises

WIP

[course:introduction-to-music-notation]: /course/introduction-to-music-notation
