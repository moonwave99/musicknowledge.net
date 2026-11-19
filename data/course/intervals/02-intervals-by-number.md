---
template: course/lesson
module: intervals
index: 4.2
id: intervals-by-number
slug: course/intervals-by-number
title: Intervals by number
description: Our voices jump from note to note. But how big is the leap?
cover:
  id: william_blake_oberon_titania_and_puck_with_fairies_dancing
  caption: William Blake - Oberon, Titania and Puck with Fairies Dancing
---

In the [previous lesson][course:introduction-to-intervals] we learnt how to navigate the letter and the chromatic landscapes.

## The interval of a third

Things get melodic again:

```abc show-piano show-octaves title="Interval between C4 and E4"
M:1/1
Q:200
L:1/1
CE
```

We can already tell the interval number and size:

- For the **number** we explore the **letter landscape**: C, D E, **3**/**third**;
- For the **size** we explore the **chromatic landscape**: (C), C#, D, D#, E, **4**.

Between C and E there is then **the interval of a third**.

Great! But what about C and Eb?

```abc show-piano show-octaves title="Interval between C4 and Eb4"
M:1/1
Q:200
L:1/1
C_E
```

We know how to navigate the letter landscape, but we haven't found any flat or sharp sign in it. Now it's time to introduce the following rule:

**We discard any accidental sign when finding the interval number**.

For example:

- D to G;
- D to G#;
- Db to G#;
- D# to Gb.

And all other possible D and G altered combinations have interval number four.

Coming back to C-Eb, we drop the flat: C-E, interval number three.  
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

## The interval of a sixth

WIP

## The interval of a second

WIP

## The interval of a seventh

WIP

## Conclusion

WIP

[course:introduction-to-intervals]: /course/introduction-to-intervals
