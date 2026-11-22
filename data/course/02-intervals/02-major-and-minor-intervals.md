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

[Since we ignore accidentals when exploring the letter landscape][course:actual-use-of-the-letter-landscape], C-Eb must also be a third. How can we discern them? We look at the **size**: C-E has 4 semitones, C-Eb has 3.

We call C-E a **major third** and C-Eb a **minor third**. Catching up:

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

<aside>

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

</aside>

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

### Manipulating thirds

This applies to all intervals, but this is the first species we are seeing in details and earns the privilege of being used as example. Let's take the E-G interval, what kind of third it is again? Minor, exactly. What happens if we sharpen the G?

```abc show-piano show-octaves title="The E4-G4 and E4-G#4 intervals"
M:1/1
Q:200
L:1/1
EG | E^G
```

Once again, see how both intervals look like a third on the staff (line to line). Raising the second note of the interval makes it one semitone wider, so we go from minor third (E-G) to major third (E-G#). Check the sound!

The same happens if we flatten the first note of the interval:

```abc show-piano show-octaves title="The E4-G4 and Eb4-G4 intervals"
M:1/1
Q:200
L:1/1
EG | _EG
```

We have just seen how to enlarge the E-G interval in two possible directions. You can also shrink intervals of course:

```abc show-piano show-octaves title="Two ways of shrinking the F4-A4 interval"
M:1/1
Q:200
L:1/1
FA | ^FA | =F_A
```

We go from a major third (F-A) to two possible minor thirds (F#-A and F-Ab).

<aside>

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

</aside>

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

Like third intervals, sixths sound great in a row:

```abc show-piano show-octaves title="A sequence of sixth intervals"
M:1/1
Q:200
L:1/1
[Ec] | [Fd] | [Ge] | [Af] | [Bg] [ca]
```

On the staff: if they start on a line they end on a space, and the other way around.

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

<aside>

### Diatonic vs. chromatic semitone

[When we introduced semitones and tones][course:semitones-and-whole-tones] we didn't know what intervals of a second were yet.

The following distinction is worth noting:

```abc show-piano show-octaves title="Chromatic and diatonic semitones"
M:1/1
Q:200
L:1/1
C_D | C^C
```

Although both examples have the sime size and sound the same, the first one is **a minor second** while the second is **an augmented unison** because C-C has number 1 in the letter landscape. We will see what augmented and diminished intervals are [in the corresponding lesson][course:augmented-and-diminished-intervals].

The first is also called a **diatonic semitone** because it goes through different note names, and the second a **chromatic semitone** because it features twice the same note name.

The two intervals have the same size in equal temperament but not in other tuning systems, so it's important to reinforce the idea that intervals that may look alike are indeed different in both function and sound depending on the intonation.

</aside>

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

We can also say that if we shrink an octave by one semitone, we get a seventh. Major or minor? Let's shrink the interval further:

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
[CEG] | [CEGB]
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

<aside>

### Exercises

Identify the notes and the properties following intervals.

```abc show-piano show-octaves title="Various major and minor intervals"
M:1/1
Q:200
L:1/1
_EG | C#B | A^f |
D^c  | G_B  | C_A |
```

<details>
  <summary>Solutions</summary>

| #   | From | To  | Quality | Number  | Size |
| --- | ---- | --- | ------- | ------- | ---- |
| 1   | Eb   | G   | Major   | Third   | 4    |
| 2   | C#   | B   | Minor   | Seventh | 10   |
| 3   | A    | F#  | Major   | Sixth   | 9    |
| 4   | D    | C#  | Major   | Seventh | 11   |
| 5   | G    | Bb  | Minor   | Third   | 3    |
| 6   | C    | Ab  | Minor   | Sixth   | 8    |

</details>

---

For every note of the C major scale, write major and minor seconds, thirds, sixths and sevenths based on it.

<details>
  <summary>Solutions</summary>

| From | To  | Quality | Number  | Size |
| ---- | --- | ------- | ------- | ---- |
| C    | D   | Major   | Second  | 2    |
| C    | Db  | Minor   | Second  | 1    |
| C    | E   | Major   | Third   | 4    |
| C    | Eb  | Minor   | Third   | 3    |
| C    | A   | Major   | Sixth   | 9    |
| C    | Ab  | Minor   | Sixth   | 8    |
| C    | B   | Major   | Seventh | 11   |
| C    | Bb  | Minor   | Seventh | 10   |

| From | To  | Quality | Number  | Size |
| ---- | --- | ------- | ------- | ---- |
| D    | E   | Major   | Second  | 2    |
| D    | Eb  | Minor   | Second  | 1    |
| D    | F#  | Major   | Third   | 4    |
| D    | F   | Minor   | Third   | 3    |
| D    | B   | Major   | Sixth   | 9    |
| D    | Bb  | Minor   | Sixth   | 8    |
| D    | C#  | Major   | Seventh | 11   |
| D    | C   | Minor   | Seventh | 10   |

| From | To  | Quality | Number  | Size |
| ---- | --- | ------- | ------- | ---- |
| E    | F#  | Major   | Second  | 2    |
| E    | F   | Minor   | Second  | 1    |
| E    | G#  | Major   | Third   | 4    |
| E    | G   | Minor   | Third   | 3    |
| E    | C#  | Major   | Sixth   | 9    |
| E    | C   | Minor   | Sixth   | 8    |
| E    | D#  | Major   | Seventh | 11   |
| E    | D   | Minor   | Seventh | 10   |

| From | To  | Quality | Number  | Size |
| ---- | --- | ------- | ------- | ---- |
| F    | G   | Major   | Second  | 2    |
| F    | Gb  | Minor   | Second  | 1    |
| F    | A   | Major   | Third   | 4    |
| F    | Ab  | Minor   | Third   | 3    |
| F    | D   | Major   | Sixth   | 9    |
| F    | Db  | Minor   | Sixth   | 8    |
| F    | E   | Major   | Seventh | 11   |
| F    | Eb  | Minor   | Seventh | 10   |

| From | To  | Quality | Number  | Size |
| ---- | --- | ------- | ------- | ---- |
| G    | A   | Major   | Second  | 2    |
| G    | Ab  | Minor   | Second  | 1    |
| G    | B   | Major   | Third   | 4    |
| G    | Bb  | Minor   | Third   | 3    |
| G    | E   | Major   | Sixth   | 9    |
| G    | Eb  | Minor   | Sixth   | 8    |
| G    | F#  | Major   | Seventh | 11   |
| G    | F   | Minor   | Seventh | 10   |

| From | To  | Quality | Number  | Size |
| ---- | --- | ------- | ------- | ---- |
| A    | B   | Major   | Second  | 2    |
| A    | Bb  | Minor   | Second  | 1    |
| A    | C#  | Major   | Third   | 4    |
| A    | C   | Minor   | Third   | 3    |
| A    | F#  | Major   | Sixth   | 9    |
| A    | F   | Minor   | Sixth   | 8    |
| A    | G#  | Major   | Seventh | 11   |
| A    | G   | Minor   | Seventh | 10   |

| From | To  | Quality | Number  | Size |
| ---- | --- | ------- | ------- | ---- |
| B    | C#  | Major   | Second  | 2    |
| B    | C   | Minor   | Second  | 1    |
| B    | D#  | Major   | Third   | 4    |
| B    | D   | Minor   | Third   | 3    |
| B    | G#  | Major   | Sixth   | 9    |
| B    | G   | Minor   | Sixth   | 8    |
| B    | A#  | Major   | Seventh | 11   |
| B    | A   | Minor   | Seventh | 10   |

</details>

</aside>

[course:introduction-to-intervals]: /course/introduction-to-intervals
[course:inverted-intervals]: /course/introduction-to-intervals#inverted-intervals
[course:semitones-and-whole-tones]: /course/introduction-to-intervals#semitones-and-whole-tones
[course:actual-use-of-the-letter-landscape]: /course/introduction-to-intervals#actual-use-of-the-letter-landscape
[course:perfect-intervals]: /course/perfect-intervals
[course:augmented-and-diminished-intervals]: /course/augmented-and-diminished-intervals
