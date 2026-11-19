---
template: course/lesson
module: intervals
index: 2.2
id: major-and-minor-intervals
slug: course/major-and-minor-intervals
title: Major and minor intervals
description: Our voices jump from note to note. But how big is the leap?
cover:
  id: william_blake_oberon_titania_and_puck_with_fairies_dancing
  caption: William Blake - Oberon, Titania and Puck with Fairies Dancing
---

In the [previous lesson][course:introduction-to-intervals] we learnt how to navigate the letter and the chromatic landscapes. Let's hit the road now and find some interval qualities.

## Intervals of a third

Things get melodic again:

```abc show-piano show-octaves title="Interval between C4 and E4"
M:1/1
Q:200
L:1/1
CE
```

We know how to tell the interval **number** and **size**:

- for the number we explore the **letter landscape**: C, D E, **3**/**third**;
- for the size we explore the **chromatic landscape**: (C), C#, D, D#, E, **4**.

Between C and E there is the interval of a third, great! But what about C-Eb?

```abc show-piano show-octaves title="Interval between C4 and Eb4"
M:1/1
Q:200
L:1/1
C_E
```

We know how to navigate the letter landscape, but we haven't found any flat or sharp sign in it yet. Now it's time to introduce the following rule:

**We discard any accidental sign when finding the interval number over the letter landscape**.

For example:

- D to G;
- D to G#;
- Db to G#;
- D# to Gb.

And all other possible D and G altered combinations have interval number four.

Coming back to C-Eb, we drop the flat: C-E, interval number 3/third.  
But the C-Eb and C-E distances over the chromatic landscape differs, 3 vs. 4.

That's a problem that musicians already faced quite some centuries ago, and decided to call these two intervals **the major third** (C-E) and **the minor third** (C-Eb).

Catching up:

| From | To  | Interval quality | Interval number | Interval size |
| ---- | --- | ---------------- | --------------- | ------------- |
| C    | E   | **major**        | third           | **4**         |
| C    | Eb  | **minor**        | third           | **3**         |

That's why we needed two introduce two different landscapes: because there are intervals **with the same interval number** but **different interval size**. The **interval quality** comes to rescue and tells the difference.

To fix it in mind: _major_ means greater and _minor_ lesser. But way more important, internalize their sound:

```abc show-piano show-octaves title="C4-E4 and C4-Eb4 intervals"
M:1/1
Q:200
L:1/1
CE | C_E
```

<div class="text-note">

### Another note on enharmonics

If we apply the methods above to analyze the interval between C and D#, we'll end up with interval number 2, and interval size 3. Let's see it side by side with the C-Eb interval:

| From | To  | Interval quality  | Interval number | Interval size |
| ---- | --- | ----------------- | --------------- | ------------- |
| C    | D#  | (undisclosed yet) | second          | 3             |
| C    | Eb  | minor             | third           | 3             |

Aren't they the same interval? By no mean! We'll see soon that C to D# is **an augmented second**. That's not nitpicking, you just don't mess with the letter and chromatic landscapes!

They sound absolutely the same on the piano though, since D# and Eb share the same key:

```abc show-piano show-octaves title="C4-D#4 and C4-Eb4 intervals"
M:1/1
Q:200
L:1/1
C^D | C_E
```

This difference matters a lot in specific contexts, and we'll discuss it as soon as we encounter it. For now remember that **the interval size alone is not enough to consider two intervals equivalent**.

</div>

Let's listen to more major and minor thirds:

```abc show-piano show-octaves title="Various thirds examples"
M:1/1
Q:200
L:1/1
F A | D ^F | Ac | _G _B | E G
```

<details>
  <summary>Can you tell which are major and which minor?</summary>

| From | To  | Interval quality | Interval number | Interval size |
| ---- | --- | ---------------- | --------------- | ------------- |
| F    | A   | major            | third           | 4             |
| D    | F#  | major            | third           | 4             |
| A    | C   | minor            | third           | 3             |
| Gb   | Bb  | major            | third           | 4             |
| E    | G   | minor            | third           | 3             |

</details>

### Thirds on the staff

Thirds are very recognizable on the staff:

```abc show-piano show-octaves title="Various thirds examples"
M:1/1
Q:200
L:1/1
FA | Ac | ce || EG | GB | Bd | df
```

If the first note is on a space, so it is the second note. Same if the first note lies on a line, the second is also on a line. **This happens regardless of the third quality**.

Get familiar with the ledger lines too:

```abc show-piano show-octaves title="Various thirds examples"
M:1/1
Q:200
L:1/1
A,C | CE | fa | ac' || B,D | DF | eg | gb
```

### Thirds as the harmony building block

So far we have considered just melodic, ascending intervals. Thirds are especially important for their harmonic value:

```abc show-piano show-octaves title="Various harmonic thirds"
M:1/1
Q:200
L:1/1
[CE] | [DF] | [EG] | [FA] | [GB]
```

You might recognize this richer sound in some vocal passages, when two singer harmonize together the same melody by singing different lines. We say in fact that the two voices **move up in thirds**. Start developing as soon as possible an ear and an eye for both the vertical direction of music (harmony) and the horizontal one (melody).

Without going into detail, let's stack the C-E and E-G thirds on top of each other. Since the E note is shared between the two intervals, we'll end up playing the notes C-E-G:

```abc show-piano show-octaves title="The C-E and E-G intervals stacked up"
M:1/1
Q:200
L:1/1
[CEG]
```

Ladies and gentlemen, **the C major chord**! Chords are a fundamental element of music, and knowing their constituent intervals help understand how they are built and played on your instruments.

Creating chords by stacking thirds is called **tertian harmony**. It's not the only possible harmony (_quartal_, _quintal_, _secundal_ have their share of relevance), but one of the most common approaches.

Observe how we stacked two different third qualities: major (C-E) and minor (E-G). Stacking different qualities yields different results:

```abc show-piano show-octaves title="Different C chord examples"
M:1/1
Q:200
L:1/1
[CE^G] | [CEG] | [C_EG] | [C_E_G]
```

They sound so cool! The chords are respectively **C augmented**, **C major**, **C minor** and **C diminished**.

We'll go into detail as soon as we reach the **chords module of the course**.

## Intervals of a sixth

We know about [inverted interval][course:inverted-intervals] already, so let's invert the C-E interval:

```abc show-piano show-octaves title="The C4-E4 interval and its inversion E4-C5"
M:1/1
Q:200
L:1/1
CE | Ec
```

What can we say about the E-C interval?

- interval number: E, F, G, A, B, C, **6**/**sixth**;
- interval size: (E), F, G#, G, G#, A, A#, B, C, **8**.

We know that the sum of an interval and its inversion adds up to an octave. Do the sizes match? C-E (4) plus E-C (8) equals C-C (12), yes!

What about the interval quality? Let's consider E-C# now:

```abc show-piano show-octaves title="The E4-C#5 interval"
M:1/1
Q:200
L:1/1
E^c
```

- interval number: E, F, G, A, B, C#, **6**/**sixth** again;
- interval size: (E), F, G#, G, G#, A, A#, B, C, C#, **9**.

We still have a sixth, but greater this time. So E-C# is a **major sixth** and E-C is a **minor sixth**.

| From | To  | Interval quality | Interval number | Interval size |
| ---- | --- | ---------------- | --------------- | ------------- |
| E    | C#  | **major**        | sixth           | **9**         |
| E    | C   | **minor**        | sixth           | **8**         |

## Intervals of a second

If we limit the observation to the white keys only, what size can the interval between two consecutive notes have?

```abc show-piano show-octaves title="The seconds between the white keys"
M:1/1
Q:200
L:1/1
CD | DE | EF | FG | GA | AB | Bc
```

Either **one semitone** (E-F and B-C) or **two semitones** / **one tone** (all the other cases). See how the table below reflects the keyboard layout, i.e. the lack of black key between the note pairs E-F and B-C:

| From  | To    | Interval quality | Interval number | Interval size |
| ----- | ----- | ---------------- | --------------- | ------------- |
| C     | D     | major            | second          | 2             |
| D     | E     | major            | second          | 2             |
| **E** | **F** | **minor**        | second          | **1**         |
| F     | G     | major            | second          | 2             |
| G     | A     | major            | second          | 2             |
| A     | B     | major            | second          | 2             |
| **B** | **C** | **minor**        | second          | **1**         |

Let's absolutely not neglect the black keys! Some examples

```abc show-piano show-octaves title="Second intervals with altered notes"
M:1/1
Q:200
L:1/1
^C^D | ^FG | _G _A | B^c
```

<details>
  <summary>They are all seconds, but of which quality?</summary>

| From | To  | Interval quality | Interval number | Interval size |
| ---- | --- | ---------------- | --------------- | ------------- |
| C#   | D#  | major            | second          | 2             |
| F#   | G   | minor            | second          | 1             |
| Gb   | Ab  | major            | second          | 2             |
| B    | C#  | major            | second          | 2             |

</details>

## Intervals of a seventh

There is just one interval number left for this lesson, the **seventh**:

```abc show-piano show-octaves title="The C4-B4 interval"
M:1/1
Q:200
L:1/1
CB
```

- interval number: C, D, E, F, G, A, B, **7**/**seventh**;
- interval size: (C), C#, D, D#, E, F, G#, G, G#, A, A#, B, **11**.

Counting starts getting a bit though, but we are smart and observe that C to B is _almost_ an octave:

```abc show-piano show-octaves title="The C4-C5 octave and the C4-B4 interval"
M:1/1
Q:200
L:1/1
Cc | CB
```

We can also say that if we "shrink" an octave by one semitone, we get a seventh. Major or minor? Let's shrink the interval further:

```abc show-piano show-octaves title="The C4-B4 and the C4-Bb4 intervals"
M:1/1
Q:200
L:1/1
CB | C_B
```

Compiling our beloved interval property table:

| From | To  | Interval quality | Interval number | Interval size |
| ---- | --- | ---------------- | --------------- | ------------- |
| C    | B   | major            | seventh         | 11            |
| C    | Bb  | minor            | seventh         | 10            |

### Sevenths in harmony

The seventh interval can spice up any chord. Let's add a B to the C major chord we encountered before by stacking thirds:

```abc show-piano show-octaves title="The C major chord and the C major seventh chord"
M:1/1
Q:200
L:1/1
[CEG] | [7CEGB]
```

Jazzy! This is called the **C major seventh chord**, or `Cmaj7` in chord symbol.

What if we add the Bb instead?

```abc show-piano show-octaves title="The C major chord and the C seventh chord"
M:1/1
Q:200
L:1/1
[CEG] | [CEG_B]
```

Bluesy! This one is the **C (dominant) seventh** or `C7` chord. Yes the nomenclature can lead to confusion, but you are in the right place to clear any doubt that might arise.

By the way, what interval do we have between G and B or G and Bb? In both cases **a third**, major and minor respectively. We'll see that **seventh chords**, i.e. chords of four notes that have a seventh interval between their first and fourth notes, can also be built by stacking thirds. It's thirds all the way down baby!

Let's listen various seventh chords based on C:

```abc show-piano show-octaves title="Various C based 7th chords"
M:1/1
Q:200
L:1/1
[CEGB] | [CEG_B] | [C_EG_B] | [C_E_G_B] | [C_E_G__B]
```

Can you see the stacked thirds? All the notes lie on the lines! What, you want just to know the chord names and their notes? There you go:

| Chord name        | Chord symbol | Notes       |
| ----------------- | ------------ | ----------- |
| C major 7th       | `Cmaj7`      | C E G B     |
| C (dominant) 7th  | `C7`         | C E G Bb    |
| C minor 7th       | `Cm7`        | C Eb G Bb   |
| C half-diminished | `Cm7b5`      | C Eb Gb Bb  |
| C full-diminished | `C°7`        | C Eb Gb Bbb |

Dominant? Diminished? B double-flat? You asked baby! Just teasing what is coming next.

## Inverting an interval and the resulting quality

One final observation that will greatly speed up your interval learning.

If we flip a **major third**, we get a **minor sixth**:

```abc show-piano show-octaves title="The F4-A4 interval and its reciprocal A4-F5"
M:1/1
Q:200
L:1/1
FA | Af
```

If we flip a **minor third**, we get a **major sixth**:

```abc show-piano show-octaves title="The F#4-A4 interval and its reciprocal A4-F#5"
M:1/1
Q:200
L:1/1
^FA | A^f
```

What happens to seconds and sevenths?

```abc show-piano show-octaves title="Second and seventh intervals flipped"
M:1/1
Q:200
L:1/1
EF | Fe || _EF | F_e
```

The **minor second** becomes a **major seventh**, and the **major second** becomes a **minor seventh**.

Resuming:

- **thirds** flip to **sixths**, and viceversa;
- **seconds** flip to **sevenths**, and viceversa;
- the quality flips from **major** to **minor**, and viceversa.

There is nothing particularly exoteric behind that, it just derives from the fact that **an interval and its reciprocal add up to the octave**, the rest is interval size measurement.

Why does this thing help? Because for any interval you learn, you get its inverse for free, for example:

| Interval | Number + Quality | Inverse | Number + Quality |
| -------- | ---------------- | ------- | ---------------- |
| C-E      | major third      | E-C     | minor sixth      |
| Eb-G     | major third      | G-Eb    | minor sixth      |
| F-Db     | minor sixth      | Db-F    | major third      |
| A-G#     | major seventh    | G#-A    | minor second     |
| C-D      | major second     | D-C     | minor seventh    |

Super important: this happens **just for the intervals that have minor and minor qualities**, so thirds/sixths and seconds/sevenths. In the next lesson we'll see the [perfect intervals category][course:perfect-intervals], that behave in a different way under inversion.

## Conclusion

That has been quite an interval marathon, but it was worth it. We have seen four family of interval numbers and their respective qualities, we started to recognize them on the staff, most important we are getting our ear familiar with them.

We had a peek about how chords can be built by stacking intervals, and we concluded with some properties of inverted intervals.

## Exercises

WIP

[course:introduction-to-intervals]: /course/introduction-to-intervals
[course:inverted-intervals]: /course/introduction-to-intervals#inverted-intervals
[course:perfect-intervals]: /course/perfect-intervals
